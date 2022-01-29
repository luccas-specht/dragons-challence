import type { GetServerSideProps, NextPage } from 'next';
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

const Logout: NextPage = () => <div>Logout</div>;

export default Logout;
