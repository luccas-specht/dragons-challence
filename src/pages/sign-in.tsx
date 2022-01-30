import { useCallback } from 'react';
import { parseCookies } from 'nookies';
import type { GetServerSideProps, NextPage } from 'next';

import { useUser } from '~/hooks';
import { SignInTemplate } from '~/components';
import { SubmitDataDTO } from '~/models';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { '@dragonsChallenge.token': token } = parseCookies(ctx);

  if (token)
    return {
      redirect: {
        destination: '/list-dragons',
        permanent: false,
      },
    };

  return {
    props: {},
  };
};

const SignIn: NextPage = () => {
  const { login } = useUser();

  const handleSignIn = useCallback(
    async (data: SubmitDataDTO) => await login(data),
    [login]
  );

  return (
    <SignInTemplate
      buttonName="sign-in-button"
      textInputName="sing-in-text-input"
      buttonChildren="Entrar"
      textInputLabel="Nome de usuário ou apelido"
      passwordInputLabel="Senha"
      passwordInputName="sing-out-text-input"
      handleSignIn={handleSignIn}
    />
  );
};

export default SignIn;
