export type LoggedInUser = {
  nickname: string;
  avatarUrl: string;
} | null;

export type AuthResponse = {
  token: string;
  user: LoggedInUser;
} | null;
