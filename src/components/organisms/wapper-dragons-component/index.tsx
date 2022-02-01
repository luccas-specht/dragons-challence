import { DragonsType } from '~/models';
import { DragonCard, Spinner } from '~/components';
import { getARandomDragonAvatar } from '~/utils';

import styles from './wapper-dragons-component.module.scss';

type Props = {
  dragons: DragonsType;
  isLoading: boolean;
  onDeleteDragon: (id: string) => void;
};

export const WapperDragonsComponent = ({
  dragons,
  isLoading,
  onDeleteDragon,
}: Props) => {
  const shouldRenderSpinnerComponentOrDragons = () =>
    isLoading ? (
      <Spinner className={styles['wrapper-dragons__spinner']} />
    ) : (
      <>
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
      </>
    );

  return (
    <div className={styles['wrapper-dragons']}>
      {shouldRenderSpinnerComponentOrDragons()}
    </div>
  );
};
