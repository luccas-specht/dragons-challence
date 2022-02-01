import * as Yup from 'yup';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';

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

  const handleSubmitUpdateDragon = async (dragon: UpdateDragonDTO) => {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().min(6).required(),
        type: Yup.string().min(6).required(),
        histories: Yup.string().min(6).required(),
      });

      await schema.validate(dragon, {
        abortEarly: false,
      });

      const { data, error } = await doCallUpdateDetails(String(id), dragon);

      // adicionar toast
      !error && data ? resetForm() : alert('bah cpx, nem te conto...');
    } catch (err) {
      const validationErrors = {} as any;

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          if (error.path) validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
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
