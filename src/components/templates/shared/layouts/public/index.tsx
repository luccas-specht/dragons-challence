import { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './public-layout.module.scss';

type Props = {
  className?: string;
  children: ReactNode;
};

export const PublicLayout = ({ className = '', children }: Props) => (
  <div className={classNames(styles.container, className)}>{children}</div>
);
