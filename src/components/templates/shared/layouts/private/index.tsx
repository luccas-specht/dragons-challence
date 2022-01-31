import { ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import { useUser } from '~/hooks';
import { Navegations } from '~/models';

import { Header } from '../../../../organisms/shared/header/index';

import styles from './private-layout.module.scss';

type Props = {
  className?: string;
  children: ReactNode;
};

export const PrivateLayout = ({ className = '', children }: Props) => {
  const { asPath } = useRouter();
  const { user, logOut } = useUser();

  const navegations: Navegations = [
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

  const navegationsToShow = useMemo(
    () => navegations.filter(({ redirectTo }) => redirectTo !== asPath),
    []
  );

  return (
    <>
      <Header
        nickname={user?.nickname ?? 'Admin'}
        navegations={navegationsToShow}
      />
      <div className={classNames(styles.container, className)}>{children}</div>
    </>
  );
};
