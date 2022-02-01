import * as Yup from 'yup';
import { useRef, useState } from 'react';
import { parseCookies } from 'nookies';
import type { GetServerSideProps, NextPage } from 'next';

import { CreateDragonDTO } from '~/models';
import { useCreateDragon } from '~/hooks';
import { dragonFormSchema } from '~/validations';
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

  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    formRef?.current?.reset();
  };

  const doCallAPI = async (dragon: CreateDragonDTO) => {
    setIsLoading(true);
    const { data, error } = await call(dragon);

    /* TODO: colocar toast */
    if (!error && data) {
      resetForm();
    } else {
      alert('bah cpx, nem te conto...');
    }
    setIsLoading(false);
  };

  const handleSubmitCreateDragon = async (dragon: CreateDragonDTO) => {
    try {
      formRef.current.setErrors({});

      await dragonFormSchema.validate(dragon, {
        abortEarly: false,
      });

      doCallAPI(dragon);
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

  return (
    <CreateDragonTemplate
      formRef={formRef}
      isLoading={isLoading}
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
