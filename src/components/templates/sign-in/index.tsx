import { Form } from '@unform/web';

import { Button, PasswordInput, TextInput } from '../..';
import { SignInSubmitDataDTO } from '../../../models';

type Props = {
  textInputPlaceholder: string;
  passwordInputPlaceholder: string;
  handleSubmit: (data: SignInSubmitDataDTO) => void;
};

export const SignInTemplate = ({
  textInputPlaceholder,
  passwordInputPlaceholder,
  handleSubmit,
}: Props) => (
  <Form onSubmit={handleSubmit}>
    <TextInput name="nickname" placeholder={textInputPlaceholder} />
    <PasswordInput name="password" placeholder={passwordInputPlaceholder} />
    <Button type="submit" name="sign-in-button" arialLabel="Fazer login">
      Entrar
    </Button>
  </Form>
);
