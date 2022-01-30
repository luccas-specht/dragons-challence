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

const SignUp: NextPage = () => {
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
      buttonName="sign-in-button"
      textInputName="sing-in-text-input"
      buttonChildren="Entrar"
      textInputLabel="Nome de usuário ou apelido"
      passwordInputLabel="Senha"
      passwordInputName="sing-out-text-input"
      handleSignUp={handleSignUp}
    />
  );
};

export default SignUp;
