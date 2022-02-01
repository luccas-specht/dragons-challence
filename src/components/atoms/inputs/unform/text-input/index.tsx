import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { GenericInputProps } from '../../models';

import styles from './text-input.module.scss';

export const TextInput = ({
  name,
  type,
  placeholder,
  ...rest
}: GenericInputProps) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField, error } = useField(name);

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
      <label htmlFor={name}>
        {`${placeholder}:`}
        <input
          type={type}
          ref={inputRef}
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...rest}
        />
      </label>
      {error && <span>{error}</span>}
    </div>
  );
};
