import { DragonsType } from '~/models';
import { getARandomDragonAvatar } from '~/utils';
import { DragonCard, FloatingLink } from '~/components';

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
        avatar={getARandomDragonAvatar()}
        createdAt={createdAt}
        onDeleteDragon={onDeleteDragon}
      />
    ));
  return (
    <div className={styles['wrapper-dragons']}>
      {renderDragons()}
      <FloatingLink linkTo={linkTo} />
    </div>
  );
};
