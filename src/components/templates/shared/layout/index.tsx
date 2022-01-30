import { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './layout.module.scss';

type Props = {
  className?: string;
  children: ReactNode;
};

export const Layout = ({ className = '', children }: Props) => (
  <div className={classNames(styles.container, className)}>{children}</div>
);
