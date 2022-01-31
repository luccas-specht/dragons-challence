import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';

import styles from './floating-link.module.scss';

type Props = {
  linkTo: string;
};

export const FloatingLink = ({ linkTo }: Props) => (
  <Link href={linkTo}>
    <a className={styles['floating-link']}>
      <FiPlus />
    </a>
  </Link>
);
