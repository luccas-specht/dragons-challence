import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import styles from './tooltip-alert.module.scss';

type Props = {
  messageError: string;
};

export const TooltipAlert = ({ messageError }: Props) => (
  <div className={styles['tooltip-alert']}>
    <div className={styles['tooltip-alert__error']}>
      <FiAlertCircle size={20} />
      <span>{messageError}</span>
    </div>
  </div>
);
