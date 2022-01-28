import { useCallback } from 'react';
import type { NextPage } from 'next';

import { useUser } from '../hooks';
import { SignInSubmitDataDTO } from '../models';
import { SignInTemplate } from '../components';

const SignIn: NextPage = () => {
  const { handleChangeLoggedInUser } = useUser();

  const textInputPlaceholder = 'Nome de usuário ou apelido';
  const passwordInputPlaceholder = 'Senha';

  const handleSubmit = useCallback(
    (data: SignInSubmitDataDTO) => {
      handleChangeLoggedInUser(data);
    },
    [handleChangeLoggedInUser]
  );

  return (
    <SignInTemplate
      handleSubmit={handleSubmit}
      textInputPlaceholder={textInputPlaceholder}
      passwordInputPlaceholder={passwordInputPlaceholder}
    />
  );
};

export default SignIn;
