import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';

import { GenericInputProps } from '../../models';

import styles from './textarea.module.scss';

export const Textarea = ({ name, placeholder, ...rest }: GenericInputProps) => {
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
    <div className={styles['textarea']}>
      <label htmlFor={name}>
        {`${placeholder}:`}
        <textarea
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
