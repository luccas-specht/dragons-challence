import Image from 'next/image';
import { Text } from '~/components';
import { DragonType } from '~/models';

import styles from './dragon-details-card.module.scss';

import dragon from '../../../../public/images/default-dragon-image1.png';
import { formatDate } from '~/utils';

export const DragonDetailsCard = ({
  id,
  name,
  type,
  createdAt,
  histories,
}: DragonType) => {
  return (
    <div className={styles['container-details']}>
      <header className={styles['container-details__title']}>
        <h1>{name}</h1>
        <Text value={`Nº${id}`} />
      </header>
      <main className={styles['container-details__main']}>
        <Image
          src={dragon}
          alt={`image do dragão ${name}`}
          width={400}
          height={400}
        />
        <aside className={styles['container-details__main__wrapper-info']}>
          <Text
            value="Resumo:"
            className={styles['container-details__main__wrapper-info--title']}
          />
          <Text
            value={String(histories)}
            className={
              styles['container-details__main__wrapper-info--histories']
            }
          />
          <div>
            <article>
              <Text
                value="Tipo:"
                className={
                  styles['container-details__main__wrapper-info--title']
                }
              />
              <Text value={type} />
            </article>
            <article>
              <Text
                value="Data de criação:"
                className={
                  styles['container-details__main__wrapper-info--title']
                }
              />
              <Text value={formatDate(createdAt)} />
            </article>
          </div>
        </aside>
      </main>
    </div>
  );
};
