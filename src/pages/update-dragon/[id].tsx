import { useCallback, useEffect, useRef, useState } from 'react';
import { parseCookies } from 'nookies';
import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import { UpdateDragonTemplate } from '~/components';
import { useGetDragonDetails, useUpdateDragon } from '~/hooks';
import { InitialValuesUpdateDragonForm, UpdateDragonDTO } from '~/models';

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

  const { call: doCallUpdateDetails } = useUpdateDragon();
  const { call: doCallDragonDetails } = useGetDragonDetails();
  const formRef: any = useRef(null);

  const [initalValues, setInitialValues] =
    useState<InitialValuesUpdateDragonForm>({
      name: '',
      type: '',
      histories: '',
    });

  const resetForm = () => {
    formRef?.current?.reset();
  };

  const getDragonDetails = async () => {
    const { data, error } = await doCallDragonDetails(String(id));
    if (!error && data) {
      setInitialValues({
        name: data.name,
        histories: data.histories,
        type: data.type,
      });
    } else {
      alert('bah cpx, nem te conto...');
    }
  };

  useEffect(() => {
    getDragonDetails();
  }, []);

  const handleSubmitUpdateDragon = useCallback(
    async (dragon: UpdateDragonDTO) => {
      const { data, error } = await doCallUpdateDetails(String(id), dragon);
      /* TODO: colocar toast */
      if (!error && data) {
        resetForm();
      } else {
        alert('bah cpx, nem te conto...');
      }
    },
    [doCallUpdateDetails]
  );

  return (
    <UpdateDragonTemplate
      formRef={formRef}
      buttonName="sign-in-button"
      initalValues={initalValues}
      buttonChildren="Salvar alterações"
      textInputDragonType="type"
      textInputDragonName="name"
      textInputDragonHistory="histories"
      textInputLabelDragonName="Nome"
      textInputLabelDragonType="Tipo"
      textInputLabelDragonHistory="Descrição"
      handleSubmit={handleSubmitUpdateDragon}
    />
  );
};

export default UpdateDragonPage;
