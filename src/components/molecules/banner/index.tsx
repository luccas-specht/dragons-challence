import classNames from 'classnames';
import { GiSpikedDragonHead } from 'react-icons/gi';

import { Text } from '~/components';

import styles from './banner.module.scss';

type Props = {
  title?: string;
  subtitle?: string;
  className?: string;
};

export const Banner = ({
  title = `Dragon's`,
  subtitle = 'Challenge',
  className = '',
}: Props) => (
  <div className={classNames(styles['banner'], className)}>
    <GiSpikedDragonHead />
    <aside className={styles['banner__wrapper']}>
      <Text value={title} className={styles['banner__wrapper--title']} />
      <Text value={subtitle} className={styles['banner__wrapper--subtitle']} />
    </aside>
  </div>
);
