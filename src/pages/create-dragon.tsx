import { useCallback, useRef } from 'react';
import { parseCookies } from 'nookies';
import type { GetServerSideProps, NextPage } from 'next';

import { CreateDragonDTO } from '~/models';
import { useCreateDragon } from '~/hooks';
import { CreateDragonTemplate } from '~/components';

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
  const { call } = useCreateDragon();
  const formRef: any = useRef(null);

  const resetForm = () => {
    formRef?.current?.reset();
  };

  const handleSubmitCreateDragon = useCallback(
    async (dragon: CreateDragonDTO) => {
      const { data, error } = await call(dragon);

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
      handleSubmit={handleSubmitCreateDragon}
    />
  );
};

export default CreateDragonPage;
