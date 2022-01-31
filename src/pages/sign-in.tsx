import { useCallback } from 'react';
import { parseCookies } from 'nookies';
import type { GetServerSideProps, NextPage } from 'next';

import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

import { useUser } from '~/hooks';
import { SubmitDataDTO } from '~/models';
import { SignInTemplate } from '~/components';

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

const SignInPage: NextPage = () => {
  const { login } = useUser();

  const signInWithGoogle = () => (
    <>
      <FcGoogle /> Entre com Google
    </>
  );

  const signInWithFacebook = () => (
    <>
      <FaFacebook color="#3b5998" /> Entre com Facebook
    </>
  );

  const authButtons = [
    {
      buttonId: 'sign-in-with-google',
      buttonName: 'sign-in-with-google',
      buttonChildren: signInWithGoogle(),
    },
    {
      buttonId: 'sign-in-with-facebook',
      buttonName: 'sign-in-with-facebook',
      buttonChildren: signInWithFacebook(),
    },
  ];

  const handleSignIn = useCallback(
    async (data: SubmitDataDTO) => await login(data),
    [login]
  );

  return (
    <SignInTemplate
      authButtons={authButtons}
      linkTo="/sign-up"
      linkText="Criar Conta"
      buttonName="sign-in-button"
      textInputName="nickname"
      buttonChildren="Entrar"
      textInputLabel="Usuário ou apelido"
      passwordInputLabel="Senha"
      passwordInputName="password"
      handleSignIn={handleSignIn}
    />
  );
};

export default SignInPage;
