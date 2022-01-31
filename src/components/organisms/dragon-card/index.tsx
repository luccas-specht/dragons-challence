import Image from 'next/image';
import { FcEmptyTrash } from 'react-icons/fc';
import { GrUpdate } from 'react-icons/gr';

import { DragonType } from '~/models';
import { DragonCardLine } from '~/components';

import styles from './dragon-card.module.scss';

import defaultDragonImage from '../../../../public/images/default-dragon-image.jpg';
import Link from 'next/link';

type DragonTypeNonHistories = Omit<DragonType, 'histories'>;

type Props = DragonTypeNonHistories & {
  onDeleteDragon: (id: string) => void;
};

export const DragonCard = ({
  id,
  name,
  type,
  createdAt,
  onDeleteDragon,
}: Props) => (
  <main className={styles.card}>
    <Image src={defaultDragonImage} alt={`Dragão-${name}`} />
    <DragonCardLine name={name} type={type} createdAt={createdAt} />
    <FcEmptyTrash
      onClick={() => {
        onDeleteDragon(id);
      }}
    />
    <Link href={`/update-dragon/${id}`}>
      <a>edit</a>
    </Link>
  </main>
);
