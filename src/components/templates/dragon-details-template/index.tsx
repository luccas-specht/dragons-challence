import { DragonType } from '~/models';
import { PrivateLayout, DragonDetailsCard } from '~/components';

import styles from './dragon-details-template.module.scss';

type Props = DragonType & {
  isLoading: boolean;
};

export const DragonDetailsTemplate = ({
  id,
  name,
  type,
  createdAt,
  histories,
  isLoading,
}: Props) => (
  <PrivateLayout className={styles['dragon-details-template']}>
    <DragonDetailsCard
      id={id}
      name={name}
      type={type}
      isLoading={isLoading}
      histories={histories}
      createdAt={createdAt}
    />
  </PrivateLayout>
);
