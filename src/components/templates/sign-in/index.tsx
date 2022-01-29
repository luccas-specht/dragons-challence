import { Form } from '@unform/web';

import { Button, PasswordInput, TextInput } from '../..';
import { SignInSubmitDataDTO } from '../../../models';

type Props = {
  handleSignIn: (data: SignInSubmitDataDTO) => Promise<void>;
};

export const SignInTemplate = ({ handleSignIn }: Props) => (
  <Form onSubmit={handleSignIn}>
    <TextInput
      name="nickname-sing-in"
      placeholder="Nome de usuário ou apelido"
    />
    <PasswordInput name="nickname-sing-in" placeholder="Senha" />
    <Button type="submit" name="sign-in-button" arialLabel="Fazer login">
      Entrar
    </Button>
  </Form>
);
