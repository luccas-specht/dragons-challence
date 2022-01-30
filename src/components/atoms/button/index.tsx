import { ReactNode } from 'react';
import classnames from 'classnames';

import { ButtonType } from '~/models';

import styles from './button.module.scss';

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
    className={classnames(styles.button, className)}
    aria-label={arialLabel}
    onClick={onClick}
  >
    {children}
  </button>
);
