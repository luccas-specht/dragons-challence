import * as Yup from 'yup';
import { useRef } from 'react';
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

  const handleSubmitCreateDragon = async (dragon: CreateDragonDTO) => {
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

      const { data, error } = await call(dragon);

      /* TODO: colocar toast */
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
