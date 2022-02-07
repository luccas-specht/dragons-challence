import Router from 'next/router';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { useState, ReactNode, createContext, useEffect } from 'react';

import { useSignInRequest } from '~/hooks';
import { LoggedInUser, SubmitDataDTO, LoggedInUserContextData } from '~/models';

import userAvatar from '../../public/images/this-person-does-not-exists.jpg';

type UserProviderData = {
  children: ReactNode;
};

export const LoggedInUserContext = createContext<LoggedInUserContextData>(
  {} as LoggedInUserContextData
);

export const LoggedInUserProvider = ({ children }: UserProviderData) => {
  const { call } = useSignInRequest();
  const cookieExpiriesInTwoHours = 60 * 60 * 2;

  const [user, setUser] = useState<LoggedInUser | null>(null);

  useEffect(() => {
    const { '@dragonsChallenge.token': token } = parseCookies();

    if (token) {
      setUser({
        nickname: 'Luccas Specht',
        avatarUrl: userAvatar,
      });
    }
  }, []);

  const login = async (data: SubmitDataDTO) => {
    const { token, user } = await call(data);

    setCookie(undefined, '@dragonsChallenge.token', token, {
      maxAge: cookieExpiriesInTwoHours,
    });

    setUser(user);
    Router.push('/list-dragons');
  };

  const logOut = async () => {
    setUser(null);
    destroyCookie(null, '@dragonsChallenge.token');
    Router.push('/sign-in');
  };

  return (
    <LoggedInUserContext.Provider value={{ user, login, logOut }}>
      {children}
    </LoggedInUserContext.Provider>
  );
};
