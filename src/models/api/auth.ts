export type LoggedInUser = {
  nickname: string;
  avatarUrl: StaticImageData;
} | null;

export type AuthResponse = {
  token: string;
  user: LoggedInUser;
} | null;
