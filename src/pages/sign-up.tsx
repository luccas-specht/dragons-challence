import Router from 'next/router';
import { useCallback } from 'react';
import { parseCookies } from 'nookies';
import type { GetServerSideProps, NextPage } from 'next';

import { useCreateUser } from '~/hooks';
import { SignUpTemplate } from '~/components';
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

const SignUpPage: NextPage = () => {
  const { callAPI } = useCreateUser();

  const handleSignUp = useCallback(
    async (data: SubmitDataDTO) => {
      await callAPI(data);
      Router.push('/sign-in');
    },
    [callAPI]
  );

  return (
    <SignUpTemplate
      linkTo="/sign-in"
      linkText="Fazer login"
      buttonName="sign-up-button"
      textInputName="sing-up-text-input"
      buttonChildren="Cadastrar"
      textInputLabel="Usuário ou apelido"
      passwordInputLabel="Senha"
      passwordInputName="sing-up-password-input"
      handleSignUp={handleSignUp}
    />
  );
};

export default SignUpPage;
