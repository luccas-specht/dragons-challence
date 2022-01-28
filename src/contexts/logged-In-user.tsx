import { useState, ReactNode, createContext } from 'react';

import { LoggedInUser, LoggedInUserContextData } from '../models';

import {
  getLoggedInUser,
  removeLoggedInUser,
  saveLoggedInUser,
} from '../utils';

type UserProviderData = {
  children: ReactNode;
};

export const LoggedInUserContext = createContext<LoggedInUserContextData>(
  {} as LoggedInUserContextData
);

export const LoggedInUserProvider = ({ children }: UserProviderData) => {
  const [loggedInUser, setLoggedInUser] = useState<LoggedInUser>(() => {
    const selectedUser = getLoggedInUser();

    if (selectedUser) return JSON.parse(selectedUser);
    return null;
  });

  const onChangeSelectedUserAsViewer = () => {
    removeLoggedInUser();
    setLoggedInUser(null);
  };

  const handleChangeLoggedInUser = (user?: LoggedInUser) => {
    user ? saveLoggedInUser(user) : onChangeSelectedUserAsViewer();
  };

  return (
    <LoggedInUserContext.Provider
      value={{ user: loggedInUser, handleChangeLoggedInUser }}
    >
      {children}
    </LoggedInUserContext.Provider>
  );
};
