import * as Yup from 'yup';
import Router from 'next/router';
import { parseCookies } from 'nookies';
import { useRef, useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';

import { useCreateUser } from '~/hooks';
import { SubmitDataDTO } from '~/models';
import { SignUpTemplate } from '~/components';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { '@dragonsChallenge.token': token } = parseCookies(ctx);

  if (token)
    return {
      redirect: {
        destination: '/list-dragons',
        permanent: false,
      },
    };

  return {
    props: {},
  };
};

const SignUpPage: NextPage = () => {
  const { callAPI } = useCreateUser();
  const formRef: any = useRef(null);

  const [isLoading, setIsLoading] = useState(false);

  const schema = Yup.object().shape({
    nickname: Yup.string()
      .min(10, 'Mínimo de 10 caracteres.')
      .required('Por favor, preencha este campo.'),
    password: Yup.string()
      .min(6, 'Mínimo de 6 caracteres.')
      .required('Por favor, preencha este campo.'),
  });

  const doCallAPI = async (data: SubmitDataDTO) => {
    setIsLoading(true);
    await callAPI(data);
    setIsLoading(false);
  };

  const handleSignUp = async (data: SubmitDataDTO) => {
    try {
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });

      doCallAPI(data);
      Router.push('/sign-in');
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
    <SignUpTemplate
      formRef={formRef}
      isLoading={isLoading}
      linkTo="/sign-in"
      linkText="Fazer login"
      buttonName="sign-up-button"
      textInputName="nickname"
      buttonChildren="Cadastrar"
      textInputLabel="Usuário ou apelido"
      passwordInputLabel="Senha"
      passwordInputName="password"
      handleSignUp={handleSignUp}
    />
  );
};

export default SignUpPage;
