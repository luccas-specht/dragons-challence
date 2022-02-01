import { ReactNode } from 'react';
import classnames from 'classnames';

import { ButtonType } from '~/models';

import styles from './button.module.scss';

type Props = {
  name: string;
  type?: ButtonType;
  children: ReactNode;
  className?: 'primary' | 'secondary';
  onClick?: () => void;
};

export const Button = ({
  name,
  type = 'button',
  children,
  className = 'primary',
  onClick = () => {},
}: Props) => (
  <button
    type={type}
    name={name}
    className={classnames(
      styles.button,
      styles[`button__styles--${className}`]
    )}
    onClick={onClick}
  >
    {children}
  </button>
);
