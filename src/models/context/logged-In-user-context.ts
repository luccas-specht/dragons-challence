import { SignInSubmitDataDTO, LoggedInUser } from '..';

export type LoggedInUserContextData = {
  user: LoggedInUser;
  isAuthenticated: boolean;
  signIn: ({ nickname, password }: SignInSubmitDataDTO) => Promise<void>;
  signOut: () => Promise<void>;
};
