import { parseCookies } from 'nookies';
import { useEffect, useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';

import { Dragons } from '~/models';
import { useListAllDragons } from '~/hooks';

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

const ListDragons: NextPage = () => {
  const [dragons, setDragons] = useState<Dragons>([]);
  const { call } = useListAllDragons();

  const callAPI = async () => {
    const { data, error } = await call();
    !error && data ? setDragons(data) : alert(error);
  };

  useEffect(() => {
    callAPI();
  }, []);

  return <div>ListDragons Page</div>;
};

export default ListDragons;
