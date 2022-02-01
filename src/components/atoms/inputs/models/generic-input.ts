import { AutoComplete } from '~/models';

export type GenericInputProps = {
  name: string;
  placeholder?: string;
  autoComplete?: AutoComplete;
  type?: string;
};
