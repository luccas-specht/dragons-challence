import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';

import { GenericInputProps } from '../../models';

import styles from './password-input.module.scss';

export const PasswordInput = ({
  name,
  placeholder,
  ...rest
}: GenericInputProps) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField } = useField(name);

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
    <div className={styles['password-input']}>
      <label htmlFor={name}>
        {`${placeholder}:`}
        <input
          type="password"
          ref={inputRef}
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...rest}
        />
      </label>
    </div>
  );
};
