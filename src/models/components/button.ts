export type ButtonType = 'button' | 'reset' | 'submit';

export type AuthButton = {
  buttonId: string;
  buttonName: string;
  buttonChildren: string | JSX.Element;
};

export type AuthButtons = AuthButton[];
