import { DragonType } from '~/models';
import { PrivateLayout, DragonDetailsCard } from '~/components';

import styles from './dragon-details-template.module.scss';

export const DragonDetailsTemplate = ({
  id,
  name,
  type,
  createdAt,
  histories,
}: DragonType) => (
  <PrivateLayout className={styles['dragon-details-template']}>
    <DragonDetailsCard
      id={id}
      name={name}
      type={type}
      histories={histories}
      createdAt={createdAt}
    />
  </PrivateLayout>
);
