import { Button } from '~/components';
import { AuthButtons } from '~/models';

import styles from './wrapper-auth-buttons.module.scss';

type Props = {
  infos: AuthButtons;
};

export const WrapperAuthButtons = ({ infos }: Props) => {
  const renderAuthButtons = () =>
    infos.map(({ buttonId, buttonName, buttonChildren }) => (
      <Button key={buttonId} name={buttonName} className="secondary">
        {buttonChildren}
      </Button>
    ));

  return (
    <aside className={styles['wrapper-auth-buttons']}>
      {renderAuthButtons()}
    </aside>
  );
};
