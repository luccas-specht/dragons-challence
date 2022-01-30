import { SubmitDataDTO, LoggedInUser } from '..';

export type LoggedInUserContextData = {
  user: LoggedInUser;
  isAuthenticated: boolean;
  login: ({ nickname, password }: SubmitDataDTO) => Promise<void>;
  logOut: () => Promise<void>;
};
