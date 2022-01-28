import { useContext } from 'react';

import { LoggedInUserContext } from '../contexts';
import { LoggedInUserContextData } from '../models';

export const useUser = () => {
  const ERROR_MESSAGE =
    '"LoggedInUserContext" should be used with "LoggedInUserProvider"';

  const context = useContext<LoggedInUserContextData>(LoggedInUserContext);

  if (!context) throw new Error(ERROR_MESSAGE);

  return context;
};
