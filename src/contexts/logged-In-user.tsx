import { useState, ReactNode, createContext, useEffect } from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router';

import { useSignInRequest } from '../hooks';
import {
  LoggedInUser,
  SignInSubmitDataDTO,
  LoggedInUserContextData,
} from '../models';

type UserProviderData = {
  children: ReactNode;
};

export const LoggedInUserContext = createContext<LoggedInUserContextData>(
  {} as LoggedInUserContextData
);

export const LoggedInUserProvider = ({ children }: UserProviderData) => {
  const cookieExpiriesInTwoHours = 60 * 60 * 2;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<LoggedInUser | null>(null);

  useEffect(() => {
    () => {
      const { '@dragonsChallenge.loggedInUser': user } = parseCookies();

      if (!!user && Object.values(user).length > 0) {
        setIsAuthenticated(true);
        return JSON.parse(user);
      }
      return null;
    };
  }, []);

  const login = async (data: SignInSubmitDataDTO) => {
    const { token, user } = await useSignInRequest(data);

    setCookie(undefined, '@dragonsChallenge.token', token, {
      maxAge: cookieExpiriesInTwoHours,
    });
    setCookie(undefined, '@dragonsChallenge.loggedInUser', `${user.nickname}`, {
      maxAge: cookieExpiriesInTwoHours,
    });

    setUser(user);
    setIsAuthenticated(true);
    Router.push('/list-dragons');
  };

  const logOut = async () => {
    setUser(null);
    setIsAuthenticated(false);
    destroyCookie({}, '@dragonsChallenge.token');
    destroyCookie({}, '@dragonsChallenge.loggedInUser');
    Router.push('/sign-in');
  };

  return (
    <LoggedInUserContext.Provider
      value={{ user, isAuthenticated, login, logOut }}
    >
      {children}
    </LoggedInUserContext.Provider>
  );
};
