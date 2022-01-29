import { Form } from '@unform/web';

import { Button, PasswordInput, TextInput } from '../..';
import { SignInSubmitDataDTO } from '../../../models';

type Props = {
  handleSignIn: (data: SignInSubmitDataDTO) => void;
};

export const SignInTemplate = ({ handleSignIn }: Props) => (
  <Form onSubmit={handleSignIn}>
    <TextInput name="nickname" placeholder="Nome de usuário ou apelido" />
    <PasswordInput name="password" placeholder="Senha" />
    <Button type="submit" name="sign-in-button" arialLabel="Fazer login">
      Entrar
    </Button>
  </Form>
);
