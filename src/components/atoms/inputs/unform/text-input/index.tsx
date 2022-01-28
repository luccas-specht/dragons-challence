import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { GenericInputProps } from '../../models';

export const TextInput = ({ name, ...rest }: GenericInputProps) => {
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
    <input type="text" ref={inputRef} defaultValue={defaultValue} {...rest} />
  );
};
