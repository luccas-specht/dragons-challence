import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';

import { DragonCard } from '~/components';
import { DragonsType } from '~/models';

import styles from './wapper-dragons-component.module.scss';

type Props = {
  linkTo?: string;
  dragons: DragonsType;
  onDeleteDragon: (id: string) => void;
};

export const WapperDragonsComponent = ({
  dragons,
  linkTo = '/create-dragon',
  onDeleteDragon,
}: Props) => {
  const renderDragons = () =>
    dragons.map(({ id, name, type, createdAt }) => (
      <DragonCard
        id={id}
        key={id}
        name={name}
        type={type}
        createdAt={createdAt}
        onDeleteDragon={onDeleteDragon}
      />
    ));
  return (
    <div className={styles.dragons}>
      {renderDragons()}
      <Link href={linkTo}>
        <a>
          <FiPlus />
        </a>
      </Link>
    </div>
  );
};
