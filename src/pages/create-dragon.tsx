import { parseCookies } from 'nookies';
import type { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { '@dragonsChallenge.token': token } = parseCookies(ctx);

  if (!token)
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };

  return {
    props: {},
  };
};

const CreateDragonPage: NextPage = () => {
  return <div>oi</div>;
};

export default CreateDragonPage;
