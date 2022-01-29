export type Dragon = {
  createdAt: Date | string;
  name: string;
  type: string;
  histories: string | string[];
  id: string;
};

export type Dragons = Dragon[];
