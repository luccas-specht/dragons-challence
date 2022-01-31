import Image from 'next/image';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import { Banner, Text, PublicLayout } from '~/components';

import defaultAvatar from '../../../../../public/images/this-person-does-not-exists.jpg';

import styles from './header.module.scss';

type Props = {
  nickname: string;
  userAvatar?: string | StaticImageData;
};

export const Header = ({ nickname, userAvatar = defaultAvatar }: Props) => {
  const [] = useState(false);

  return (
    <header className={styles['header']}>
      <PublicLayout className={styles['header-container']}>
        <Banner className={styles['header-container__banner']} />
        <aside className={styles['header-container__wrapper-user']}>
          <Image
            src={userAvatar}
            alt="Foto de perfil do usuário"
            width={50}
            height={50}
          />
          <div className={styles['header-container__wrapper-user__infos']}>
            <Text
              value="Bem vindo,"
              className={
                styles['header-container__wrapper-user__infos--wellcome']
              }
            />
            <Text
              value={nickname}
              className={
                styles['header-container__wrapper-user__infos--user-name']
              }
            />
          </div>
          <GiHamburgerMenu />
        </aside>
      </PublicLayout>
    </header>
  );
};
