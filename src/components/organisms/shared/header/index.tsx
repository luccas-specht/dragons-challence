import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';

import { Banner, Text } from '~/components';

import styles from './header.module.scss';

type Props = {
  nickname: string;
  userAvatar: string;
};

export const Header = ({ nickname, userAvatar }: Props) => (
  <header className={styles['header']}>
    <Banner />
    <aside>
      {/*  <Image src={userAvatar} alt="Foto de perfil do usuário" /> */}
      <div>
        <Text value="Bem vindo," />
        <Text value={nickname} />
      </div>
    </aside>
    <aside>
      <GiHamburgerMenu />
    </aside>
  </header>
);
