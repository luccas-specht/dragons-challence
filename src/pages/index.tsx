import type { GetServerSideProps, NextPage } from 'next';
import { parseCookies } from 'nookies';

import Login from './login';

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

const Default: NextPage = () => <Login />;

export default Default;
