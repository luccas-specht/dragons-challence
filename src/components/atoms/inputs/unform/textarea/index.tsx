import classNames from 'classnames';
import { useField } from '@unform/core';

import React, { useEffect, useRef } from 'react';

import { TooltipAlert } from '~/components';
import { GenericInputProps } from '../../models';

import styles from './textarea.module.scss';

export const Textarea = ({ name, placeholder, ...rest }: GenericInputProps) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  const renderError = () => !!error && <TooltipAlert messageError={error} />;

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => ref.current.value,
      setValue: (ref, value) => (ref.current.value = value),
      clearValue: (ref) => (ref.current.value = ''),
    });
  }, [fieldName, registerField, error]);

  return (
    <div className={styles['textarea']}>
      <label htmlFor={name} className={styles['textarea__label']}>
        {`${placeholder}:`}
        <textarea
          ref={inputRef}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={classNames(
            styles['textarea__input'],
            !!error && styles['textarea__input--error']
          )}
          {...rest}
        />
      </label>
      {renderError()}
    </div>
  );
};
