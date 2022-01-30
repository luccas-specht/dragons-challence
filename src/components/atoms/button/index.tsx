import { ReactNode } from 'react';

import { ButtonType } from '~/models';

type Props = {
  name: string;
  type?: ButtonType;
  arialLabel: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

export const Button = ({
  name,
  type = 'button',
  children,
  arialLabel,
  className = '',
  onClick = () => {},
}: Props) => (
  <button
    type={type}
    name={name}
    className={className}
    aria-label={arialLabel}
    onClick={onClick}
  >
    {children}
  </button>
);
