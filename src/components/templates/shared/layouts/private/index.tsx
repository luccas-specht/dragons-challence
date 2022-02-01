import classNames from 'classnames';
import { useRouter } from 'next/router';
import { ReactNode, useMemo } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useUser } from '~/hooks';
import { Header } from '~/components';
import { Navegations } from '~/models';

import styles from './private-layout.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

export const PrivateLayout = ({ className = '', children }: Props) => {
  const { user, logOut } = useUser();
  const { asPath } = useRouter();

  const autoClose = 3000;
  const toastContainerLimit = 1;
  const toastContainerPosition = 'top-right';

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
        nickname={user?.nickname ?? 'Luccas Specht'}
        userAvatar={user?.avatarUrl}
        navegations={navegationsToShow}
      />
      <div className={classNames(styles.container, className)}>{children}</div>
      <ToastContainer
        rtl={false}
        limit={toastContainerLimit}
        position={toastContainerPosition}
        autoClose={autoClose}
        draggable={false}
        closeOnClick={false}
        newestOnTop
        pauseOnHover
        theme="colored"
      />
    </>
  );
};
