import { Form } from '@unform/web';

import { Button, PasswordInput, TextInput } from '~/components';
import { SubmitDataDTO } from '~/models';

type Props = {
  buttonName: string;
  buttonChildren: string | JSX.Element;
  textInputName: string;
  textInputLabel: string;
  passwordInputLabel: string;
  passwordInputName: string;
  handleSubmit: (data: SubmitDataDTO) => Promise<void>;
};

export const MainForm = ({
  buttonName,
  buttonChildren,
  textInputName,
  textInputLabel,
  passwordInputName,
  passwordInputLabel,
  handleSubmit,
}: Props) => (
  <Form onSubmit={handleSubmit}>
    <TextInput name={textInputName} placeholder={textInputLabel} />
    <PasswordInput name={passwordInputName} placeholder={passwordInputLabel} />
    <Button type="submit" name={buttonName}>
      {buttonChildren}
    </Button>
  </Form>
);
