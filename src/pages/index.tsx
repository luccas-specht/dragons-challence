import { parseCookies } from 'nookies';
import type { GetServerSideProps, NextPage } from 'next';

import SignIn from './sign-in';

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

const Default: NextPage = () => <SignIn />;

export default Default;
