export type LoggedInUser = {
  nickname: string;
  password: string;
} | null;

export type LoggedInUserContextData = {
  user: LoggedInUser;
  handleChangeLoggedInUser: (user?: LoggedInUser) => void;
};
