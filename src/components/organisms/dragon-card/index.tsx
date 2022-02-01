import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import classnames from 'classnames';
import { IoIosArrowDown } from 'react-icons/io';

import { DragonType } from '~/models';
import { DragonCardLine } from '~/components';

import styles from './dragon-card.module.scss';

type DragonTypeNonHistories = Omit<DragonType, 'histories'>;

type Props = DragonTypeNonHistories & {
  onDeleteDragon: (id: string) => void;
  avatar: StaticImageData;
};

export const DragonCard = ({
  id,
  name,
  type,
  createdAt,
  avatar,
  onDeleteDragon,
}: Props) => {
  const [isShowingLinks, setIsShowingLinks] = useState(false);

  const handleIsShowingLinks = () =>
    setIsShowingLinks(isShowingLinks ? false : true);

  return (
    <main className={styles['card']}>
      <Image src={avatar} alt={`dragão: ${name}`} />
      <DragonCardLine name={name} type={type} createdAt={createdAt} />
      <button
        type="button"
        onClick={handleIsShowingLinks}
        className={classnames(
          styles['card__show-inks'],
          isShowingLinks && styles['card__show-inks--is-showing']
        )}
      >
        <IoIosArrowDown size={23} />
      </button>
      {isShowingLinks && (
        <footer className={styles['card__footer']}>
          <Link href={`/dragon-details/${id}`}>
            <a>Detalhe</a>
          </Link>
          <Link href={`/update-dragon/${id}`}>
            <a>Editar</a>
          </Link>
          <button onClick={() => onDeleteDragon(id)}>Deletar</button>
        </footer>
      )}
    </main>
  );
};
