import { useState } from 'react';
import Image from 'next/image';

import defaultAvatar from '../../../../../public/images/this-person-does-not-exists.jpg';

import { Navegations } from '~/models';
import { Banner, FloatingMenu, UserDetails } from '~/components';

import styles from './header.module.scss';

type Props = {
  nickname: string;
  userAvatar?: string | StaticImageData;
  navegations: Navegations;
};

export const Header = ({
  nickname,
  navegations,
  userAvatar = defaultAvatar,
}: Props) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => setIsOpenMenu(isOpenMenu ? false : true);
  const handleOutsideClick = () => setIsOpenMenu(false);

  return (
    <header className={styles['header']}>
      <div className={styles['header-container']}>
        <Banner className={styles['header-container__banner']} />
        <aside className={styles['header-container__wrapper-user']}>
          <Image
            src={userAvatar}
            alt="Foto de perfil do usuário"
            width={50}
            height={50}
          />
          <UserDetails nickname={nickname} />
          <FloatingMenu
            isOpen={isOpenMenu}
            navegations={navegations}
            handleOpenMenu={handleOpenMenu}
            handleOutsideClick={handleOutsideClick}
          />
        </aside>
      </div>
    </header>
  );
};
