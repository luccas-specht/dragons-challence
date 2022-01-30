import classnames from 'classnames';

import styles from './text.module.scss';

type Props = {
  value: string;
  className?: string;
};

export const Text = ({ value, className = '' }: Props) => (
  <span className={classnames(styles['text--defult'], className)}>{value}</span>
);
