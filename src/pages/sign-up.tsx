import * as Yup from 'yup';
import { useRef } from 'react';
import Router from 'next/router';
import { parseCookies } from 'nookies';
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

  const handleSignUp = async (data: SubmitDataDTO) => {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        nickname: Yup.string().min(10).required(),
        password: Yup.string().min(6).required(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      await callAPI(data);
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
