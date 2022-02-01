import Image from 'next/image';
import Link from 'next/link';

import { Text } from '~/components';
import pageNotFoundSvg from '../../../../../public/images/page-not-found.png';

import styles from './page-not-found.module.scss';

type Props = {
  title?: string;
  linkTo?: string;
  linkText?: string;
  description?: string;
};

export const PageNotFound = ({
  title = 'Página não encontrada',
  linkTo = '/',
  linkText = 'Voltar',
  description = 'Nós sentimos muito, mas parece que a página que você está procurando não existe ou talvez tenha sido deleteda.',
}: Props) => (
  <div className={styles['page-not-found']}>
    <Image src={pageNotFoundSvg} alt="Página não encontrada" />
    <aside className={styles['page-not-found__details']}>
      <div className={styles['page-not-found__details__wrapper']}>
        <Text
          value={title}
          className={styles['page-not-found__details__wrapper--title']}
        />
        <Text
          value={description}
          className={styles['page-not-found__details__wrapper--description']}
        />
      </div>
      <Link href={linkTo}>
        <a className={styles['page-not-found__link']}>
          <Text value={linkText} />
        </a>
      </Link>
    </aside>
  </div>
);
