import { DelConfig, GetConfig, PostConfig, PutConfig } from '.';

export type ResponseTypeSuccess<Data> = {
  data: Data | null;
  error: null;
};

export type ResponseTypeFailed<Error> = {
  data: null;
  error: Error | string | undefined;
};

export type ResponseType<Data, Error> =
  | ResponseTypeSuccess<Data>
  | ResponseTypeFailed<Error>;

export type Response = {
  get: <Data, Error>({
    route,
    params,
  }: GetConfig) => Promise<ResponseType<Data, Error>>;
  post: <Data, Error>({
    route,
    data,
  }: PostConfig) => Promise<ResponseType<Data, Error>>;
  put: <Data, Error>({
    route,
    data,
  }: PutConfig) => Promise<ResponseType<Data, Error>>;
  del: <Data, Error>({
    route,
  }: DelConfig) => Promise<ResponseType<Data, Error>>;
};
