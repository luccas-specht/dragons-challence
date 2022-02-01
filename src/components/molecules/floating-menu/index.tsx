import Link from 'next/link';
import classnames from 'classnames';
import { GiHamburgerMenu } from 'react-icons/gi';
import OutsideClickHandler from 'react-outside-click-handler';

import { Navegations } from '~/models';

import styles from './floating-menu.module.scss';

type Props = {
  isOpen: boolean;
  navegations: Navegations;
  handleOpenMenu: () => void;
  handleOutsideClick: () => void;
};

export const FloatingMenu = ({
  isOpen,
  navegations,
  handleOpenMenu,
  handleOutsideClick,
}: Props) => {
  const showMenu = () =>
    navegations.map(({ id, name, redirectTo, onRedirect = () => {} }) => (
      <Link key={id} href={redirectTo} passHref>
        <a onClick={onRedirect}>{name}</a>
      </Link>
    ));

  return (
    <OutsideClickHandler onOutsideClick={handleOutsideClick}>
      <button
        onClick={handleOpenMenu}
        className={classnames(styles['floating-menu__icon'])}
      >
        <GiHamburgerMenu />
      </button>
      <div
        className={classnames(
          styles['floating-menu__navegation'],
          isOpen && styles['floating-menu__navegation--open']
        )}
      >
        {showMenu()}
      </div>
    </OutsideClickHandler>
  );
};
