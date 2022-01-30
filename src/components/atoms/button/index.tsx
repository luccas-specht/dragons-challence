import { ReactNode } from 'react';
import classnames from 'classnames';

import { ButtonType } from '~/models';

import styles from './button.module.scss';

type Props = {
  name: string;
  type?: ButtonType;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

export const Button = ({
  name,
  type = 'button',
  children,
  className = '',
  onClick = () => {},
}: Props) => (
  <button
    type={type}
    name={name}
    className={classnames(styles.button, className)}
    onClick={onClick}
  >
    {children}
  </button>
);
