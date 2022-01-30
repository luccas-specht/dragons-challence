import { Form } from '@unform/web';

import { Button, PasswordInput, TextInput } from '../..';
import { SignUpSubmitDataDTO } from '~/models';

type Props = {
  handleSignUp: (data: SignUpSubmitDataDTO) => Promise<void>;
};

export const SignUpTemplate = ({ handleSignUp }: Props) => (
  <Form onSubmit={handleSignUp}>
    <TextInput
      name="nickname-sing-up"
      placeholder="Nome de usuário ou apelido"
    />
    <PasswordInput name="password-sing-up" placeholder="Senha" />
    <Button type="submit" name="sign-up-button" arialLabel="Criar conta">
      Criar conta
    </Button>
  </Form>
);
