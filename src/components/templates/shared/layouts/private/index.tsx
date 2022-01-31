import { ReactNode } from 'react';
import classNames from 'classnames';

import { useUser } from '~/hooks';

import { Header } from '../../../../organisms/shared/header/index';

import styles from './private-layout.module.scss';
import { Navegations } from '~/models';

type Props = {
  className?: string;
  children: ReactNode;
};

export const PrivateLayout = ({ className = '', children }: Props) => {
  const { user, logOut } = useUser();

  const NAVEGATIONS: Navegations = [
    {
      id: 'send-to-create-dragon',
      name: 'Criar um dragão',
      redirectTo: '/create-dragon',
    },
    {
      id: 'send-to-list-dragons',
      name: 'Listar dragões',
      redirectTo: '/list-dragons',
    },
    {
      id: 'sing-out',
      name: 'Sair',
      redirectTo: '/sign-in',
      onRedirect: async () => {
        await logOut();
      },
    },
  ];

  return (
    <>
      <Header nickname={user?.nickname ?? 'Admin'} navegations={NAVEGATIONS} />
      <div className={classNames(styles.container, className)}>{children}</div>
    </>
  );
};
