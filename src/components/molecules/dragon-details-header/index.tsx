import { Text } from '~/components';

import styles from './dragon-details-header.module.scss';

type Props = {
  id: string;
  dragonName: string;
};

export const DragonDetailsHeader = ({ id, dragonName }: Props) => (
  <header className={styles['container-details__title']}>
    <h1>{dragonName}</h1>
    <Text value={`Nº${id}`} />
  </header>
);
