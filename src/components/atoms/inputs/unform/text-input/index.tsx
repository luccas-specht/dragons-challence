import classNames from 'classnames';
import { useField } from '@unform/core';
import React, { useRef, useEffect } from 'react';

import { GenericInputProps } from '../../models';
import { TooltipAlert } from '~/components';

import styles from './text-input.module.scss';

export const TextInput = ({
  name,
  type,
  placeholder,
  ...rest
}: GenericInputProps) => {
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
  }, [fieldName, registerField]);

  return (
    <div className={styles['text-input']}>
      <label htmlFor={name} className={styles['text-input__label']}>
        {`${placeholder}:`}
        <input
          type={type}
          ref={inputRef}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={classNames(
            styles['text-input__input'],
            !!error && styles['text-input__input--error']
          )}
          {...rest}
        />
      </label>
      {renderError()}
    </div>
  );
};
