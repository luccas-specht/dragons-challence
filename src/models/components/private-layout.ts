export type Navegation = {
  id: string;
  name: string;
  redirectTo: string;
  onRedirect?: () => Promise<void>;
};

export type Navegations = Navegation[];
