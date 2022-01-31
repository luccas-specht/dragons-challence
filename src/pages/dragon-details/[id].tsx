import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { useEffect, useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';

import { DragonType } from '~/models';
import { useGetDragonDetails } from '~/hooks';
import { DragonDetailsTemplate } from '~/components';

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

const DragonDetailsPage: NextPage = () => {
  const {
    query: { id },
  } = useRouter();
  const { call: doCallDragonDetails } = useGetDragonDetails();

  const [dragon, setDragon] = useState<DragonType>({} as DragonType);

  const getDragonDetails = async () => {
    const { data, error } = await doCallDragonDetails(String(id));

    if (!error && data) {
      setDragon(data);
    } else {
      alert('bah cpx, nem te conto...');
    }
  };

  useEffect(() => {
    getDragonDetails();
  }, []);

  return (
    <DragonDetailsTemplate
      id={dragon.id}
      name={dragon.name}
      type={dragon.type}
      histories={dragon.histories}
      createdAt={dragon.createdAt}
    />
  );
};

export default DragonDetailsPage;
