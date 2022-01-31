import { parseCookies } from 'nookies';
import { useCallback, useEffect, useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';

import { DragonsType } from '~/models';
import { orderDragonsByName } from '~/utils';
import { ListDragonsTemplate } from '~/components';
import { useDeleteDragon, useListAllDragons } from '~/hooks';

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

const ListDragonsPage: NextPage = () => {
  const { call: callApiToList } = useListAllDragons();
  const { call: callApiToDelete } = useDeleteDragon();

  const [dragons, setDragons] = useState<DragonsType>([]);

  const handleDeleteDragon = useCallback(async (dragonId: string) => {
    const { data, error } = await callApiToDelete(dragonId);

    if (error && !data) alert(error);

    listDragons();
  }, []);

  const listDragons = async () => {
    const { data, error } = await callApiToList();
    /* TODO: colocar tost */
    !error && data ? setDragons(orderDragonsByName(data)) : alert(error);
  };

  useEffect(() => {
    listDragons();
  }, []);

  return (
    <ListDragonsTemplate
      dragons={dragons}
      onDeleteDragon={handleDeleteDragon}
    />
  );
};

export default ListDragonsPage;
