import Image from 'next/image';

import { DragonType } from '~/models';
import { getARandomDragonAvatar } from '~/utils';
import { DragonDetailsHeader, DragonDetailsLine, Spinner } from '~/components';

import styles from './dragon-details-card.module.scss';

type Props = DragonType & {
  isLoading: boolean;
};

export const DragonDetailsCard = ({
  id,
  name,
  type,
  createdAt,
  histories,
  isLoading,
}: Props) => {
  const shouldRenderSpinnerComponentOrDragonDetails = () =>
    isLoading ? (
      <Spinner className={styles['container-details__spinner']} />
    ) : (
      <>
        <DragonDetailsHeader id={id} dragonName={name} />
        <main className={styles['container-details__main']}>
          <Image
            src={getARandomDragonAvatar()}
            alt={`foto do dragão ${name}`}
            width={400}
            height={400}
          />
          <DragonDetailsLine
            type={type}
            createdAt={createdAt}
            histories={String(histories)}
          />
        </main>
      </>
    );

  return (
    <div className={styles['container-details']}>
      {shouldRenderSpinnerComponentOrDragonDetails()}
    </div>
  );
};
