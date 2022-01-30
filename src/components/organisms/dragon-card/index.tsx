import Image from 'next/image';

import { formatDate } from '~/utils';
import { DragonType } from '~/models';

import styles from './dragon-card.module.scss';

import defaultDragonImage from '../../../../public/images/default-dragon-image.jpg';

type Props = Omit<DragonType, 'histories'>;

export const DragonCard = ({ id, name, type, createdAt }: Props) => {
  const shouldRenderOriginalPropertyOrDefaultProperty = (
    property: string | null,
    defaultProperty: string
  ) => (property && property.length > 0 ? property : defaultProperty);

  return (
    <main className={styles.card}>
      <Image src={defaultDragonImage} alt={`Dragão-${name}`} />
      <aside className={styles['card-info']}>
        <h3>
          {shouldRenderOriginalPropertyOrDefaultProperty(name, 'Charizard')}
        </h3>
        <span>
          {shouldRenderOriginalPropertyOrDefaultProperty(type, 'Fogo')}
        </span>
        <span>{formatDate(createdAt, 'DD/MM')}</span>
      </aside>
    </main>
  );
};
