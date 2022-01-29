import { useCallback } from 'react';
import type { GetServerSideProps, NextPage } from 'next';

import { useUser } from '../hooks';
import { SignInTemplate } from '../components';
import { SignInSubmitDataDTO } from '../models';
import { parseCookies } from 'nookies';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { '@dragonsChallenge.token': token } = parseCookies(ctx);

  if (token)
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    };

  return {
    props: {},
  };
};

const Login: NextPage = () => {
  const { signIn } = useUser();

  const handleSignIn = useCallback(
    (data: SignInSubmitDataDTO) => signIn(data),
    [signIn]
  );

  return <SignInTemplate handleSignIn={handleSignIn} />;
};

export default Login;
