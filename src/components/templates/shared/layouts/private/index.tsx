import { ReactNode } from 'react';
import classNames from 'classnames';

import { useUser } from '~/hooks';
import { NAVEGATIONS } from '~/constants';

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
      <Header nickname={user?.nickname ?? 'Admin'} navegations={NAVEGATIONS} />
      <div className={classNames(styles.container, className)}>{children}</div>
    </>
  );
};
