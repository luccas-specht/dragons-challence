import { DragonCard } from '..';
import { DragonsType } from '~/models';

import styles from './wapper-dragons-component.module.scss';

type Props = {
  dragons: DragonsType;
};

export const WapperDragonsComponent = ({ dragons }: Props) => (
  <div className={styles.dragons}>
    {dragons.map(({ id, name, type, createdAt }) => (
      <DragonCard
        id={id}
        key={id}
        name={name}
        type={type}
        createdAt={createdAt}
      />
    ))}
  </div>
);
