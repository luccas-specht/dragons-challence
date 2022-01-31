import { GiHamburgerMenu } from 'react-icons/gi';
import OutsideClickHandler from 'react-outside-click-handler';
import classnames from 'classnames';
import Router from 'next/router';

import { Navegations } from '~/models';
import Link from 'next/link';

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
    navegations.map(({ id, name, redirectTo }) => (
      <Link key={id} href={redirectTo}>
        {name}
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
