import { DragonCard } from '..';
import { DragonsType } from '~/models';

import styles from './wapper-dragons-component.module.scss';

type Props = {
  dragons: DragonsType;
  onDeleteDragon: (id: string) => void;
};

export const WapperDragonsComponent = ({ dragons, onDeleteDragon }: Props) => (
  <div className={styles.dragons}>
    {dragons.map(({ id, name, type, createdAt }) => (
      <DragonCard
        id={id}
        key={id}
        name={name}
        type={type}
        createdAt={createdAt}
        onDeleteDragon={onDeleteDragon}
      />
    ))}
  </div>
);
