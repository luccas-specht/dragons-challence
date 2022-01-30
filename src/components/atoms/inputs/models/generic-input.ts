import { AutoComplete } from '~/models';

import { ChangeEventHandler } from 'react';

export type GenericInputProps = {
  name: string;
  placeholder?: string;
  autoComplete?: AutoComplete;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
