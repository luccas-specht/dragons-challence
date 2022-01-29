import { SignInSubmitDataDTO, LoggedInUser } from '..';

export type LoggedInUserContextData = {
  user: LoggedInUser;
  isAuthenticated: boolean;
  login: ({ nickname, password }: SignInSubmitDataDTO) => Promise<void>;
  logOut: () => Promise<void>;
};
