import { LoggedInUser } from '../models';

export const saveLoggedInUser = (user: LoggedInUser) => {
  localStorage && localStorage?.setItem('@access_user', JSON.stringify(user));
};

export const getLoggedInUser = () =>
  localStorage && localStorage?.getItem('@access_user');

export const removeLoggedInUser = () => {
  localStorage && localStorage?.removeItem('@access_user');
};
