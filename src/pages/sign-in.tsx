import { useCallback } from 'react';
import { parseCookies } from 'nookies';
import type { GetServerSideProps, NextPage } from 'next';

import { useUser } from '~/hooks';
import { SignInTemplate } from '~/components';
import { SignInSubmitDataDTO } from '~/models';

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
    async (data: SignInSubmitDataDTO) => await login(data),
    [login]
  );

  return <SignInTemplate handleSignIn={handleSignIn} />;
};

export default SignIn;
