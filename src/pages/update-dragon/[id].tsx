import { useCallback, useRef } from 'react';
import { parseCookies } from 'nookies';
import type { GetServerSideProps, NextPage } from 'next';

import { UpdateDragonDTO } from '~/models';
import { useUpdateDragon } from '~/hooks';
import { CreateDragonTemplate } from '~/components';
import { useRouter } from 'next/router';

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

const UpdateDragonPage: NextPage = () => {
  const {
    query: { id },
  } = useRouter();

  console.log('loggg', id);

  const { call } = useUpdateDragon();
  const formRef: any = useRef(null);

  const resetForm = () => {
    formRef?.current?.reset();
  };

  const handleSubmitUpdateDragon = useCallback(
    async (dragon: UpdateDragonDTO) => {
      const { data, error } = await call(String(id), dragon);

      /* TODO: colocar toast */
      if (!error && data) {
        resetForm();
      } else {
        alert('bah cpx, nem te conto...');
      }
    },
    [call]
  );

  return (
    <CreateDragonTemplate
      formRef={formRef}
      buttonName="sign-in-button"
      buttonChildren="Criar"
      textInputDragonName="name"
      textInputLabelDragonName="Nome"
      textInputDragonType="type"
      textInputLabelDragonType="Tipo"
      textInputDragonHistory="histories"
      textInputLabelDragonHistory="Descrição"
      handleSubmit={handleSubmitUpdateDragon}
    />
  );
};

export default UpdateDragonPage;
