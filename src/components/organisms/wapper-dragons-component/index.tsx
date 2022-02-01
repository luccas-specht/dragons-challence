import { DragonsType } from '~/models';
import { getARandomDragonAvatar } from '~/utils';
import { DragonCard } from '~/components';

import styles from './wapper-dragons-component.module.scss';

type Props = {
  dragons: DragonsType;
  onDeleteDragon: (id: string) => void;
};

export const WapperDragonsComponent = ({ dragons, onDeleteDragon }: Props) => (
  <div className={styles['wrapper-dragons']}>
    {dragons.map(({ id, name, type, createdAt }) => (
      <DragonCard
        id={id}
        key={id}
        name={name}
        type={type}
        avatar={getARandomDragonAvatar()}
        createdAt={createdAt}
        onDeleteDragon={onDeleteDragon}
      />
    ))}
  </div>
);
