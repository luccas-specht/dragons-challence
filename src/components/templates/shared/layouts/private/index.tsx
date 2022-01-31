import { ReactNode } from 'react';
import classNames from 'classnames';

import { useUser } from '~/hooks';

import { Header } from '../../../../organisms/shared/header/index';

import styles from './private-layout.module.scss';

type Props = {
  className?: string;
  children: ReactNode;
};

export const PrivateLayout = ({ className = '', children }: Props) => {
  const { user } = useUser();

  return (
    <>
      <Header nickname={user?.nickname ?? 'Admin'} />
      <div className={classNames(styles.container, className)}>{children}</div>
    </>
  );
};
