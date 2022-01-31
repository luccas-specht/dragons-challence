import { Text } from '~/components';

import styles from './user-details.module.scss';

type Props = {
  textWellcome?: string;
  nickname: string;
};

export const UserDetails = ({
  nickname,
  textWellcome = 'Bem vindo,',
}: Props) => (
  <div className={styles['user-details']}>
    <Text value={textWellcome} className={styles['user-details--wellcome']} />
    <Text value={nickname} className={styles['user-details--user-name']} />
  </div>
);
