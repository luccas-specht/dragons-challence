export type PostConfig = {
  route?: string | undefined;
  data?: any | undefined;
};

export type GetConfig = {
  route?: string | undefined;
  params?: any | undefined;
};

export type PutConfig = {
  route: string;
  data?: any | undefined;
};

export type DelConfig = {
  route: string;
};
