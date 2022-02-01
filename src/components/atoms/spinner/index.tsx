import classNames from 'classnames';

import styles from './spinner.module.scss';

type Props = {
  className?: string | undefined;
};

export const Spinner = ({ className = '' }: Props) => (
  <div className={classNames(styles['spinner'], className)} />
);
