import { toast } from 'react-toastify';
import { parseCookies } from 'nookies';
import { useCallback, useEffect, useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';

import { DragonsType } from '~/models';
import { ListDragonsTemplate } from '~/components';
import { fakeDelay, orderDragonsByName } from '~/utils';
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
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteDragon = useCallback(async (dragonId: string) => {
    const { data, error } = await callApiToDelete(dragonId);

    if (error && !data) toast.error(error);

    listDragons();
  }, []);

  const listDragons = async () => {
    setIsLoading(true);
    const { data, error } = await callApiToList();

    if (!error && data) {
      setDragons(orderDragonsByName(data));
    } else {
      toast.error(error);
    }
    await fakeDelay(500);
    setIsLoading(false);
  };

  useEffect(() => {
    listDragons();
  }, []);

  return (
    <ListDragonsTemplate
      dragons={dragons}
      isLoading={isLoading}
      onDeleteDragon={handleDeleteDragon}
    />
  );
};

export default ListDragonsPage;
