import Router from 'next/router';
import { useCallback } from 'react';
import { parseCookies } from 'nookies';
import type { GetServerSideProps, NextPage } from 'next';

import { useCreateUser } from '~/hooks';
import { SignUpTemplate } from '~/components';
import { SignUpSubmitDataDTO } from '~/models';

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
    async (data: SignUpSubmitDataDTO) => {
      await callAPI(data);
      Router.push('/sign-in');
    },
    [callAPI]
  );

  return <SignUpTemplate handleSignUp={handleSignUp} />;
};

export default SignUp;
