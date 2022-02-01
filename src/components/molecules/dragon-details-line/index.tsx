import { Text } from '~/components';
import { formatDate } from '~/utils';

import styles from './dragon-details-line.module.scss';

type Props = {
  type: string;
  histories: string;
  createdAt: string | Date;
};

export const DragonDetailsLine = ({ type, histories, createdAt }: Props) => (
  <div className={styles['dragon-details-line']}>
    <Text value="Resumo:" className={styles['dragon-details-line--title']} />
    <Text
      value={String(histories)}
      className={styles['dragon-details-line--about']}
    />
    <aside className={styles['dragon-details-line__wrapper-info']}>
      <div>
        <Text
          value="Tipo:"
          className={styles['dragon-details-line__wrapper-info--title']}
        />
        <Text
          value={type}
          className={styles['dragon-details-line__wrapper-info--about']}
        />
      </div>
      <div>
        <Text
          value="Data de criação:"
          className={styles['dragon-details-line__wrapper-info--title']}
        />
        <Text
          value={formatDate(createdAt)}
          className={styles['dragon-details-line__wrapper-info--about']}
        />
      </div>
    </aside>
  </div>
);
