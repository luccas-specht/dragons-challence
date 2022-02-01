import * as Yup from 'yup';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { parseCookies } from 'nookies';
import type { GetServerSideProps, NextPage } from 'next';

import { useUser } from '~/hooks';
import { SubmitDataDTO } from '~/models';
import { SignInTemplate } from '~/components';
import { useRef } from 'react';

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

const SignInPage: NextPage = () => {
  const { login } = useUser();
  const formRef: any = useRef(null);

  const signInWithGoogle = () => (
    <>
      <FcGoogle /> Entre com Google
    </>
  );

  const signInWithFacebook = () => (
    <>
      <FaFacebook color="#3b5998" /> Entre com Facebook
    </>
  );

  const authButtons = [
    {
      buttonId: 'sign-in-with-google',
      buttonName: 'sign-in-with-google',
      buttonChildren: signInWithGoogle(),
    },
    {
      buttonId: 'sign-in-with-facebook',
      buttonName: 'sign-in-with-facebook',
      buttonChildren: signInWithFacebook(),
    },
  ];

  const handleSignIn = async (data: SubmitDataDTO) => {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        nickname: Yup.string().min(10).required(),
        password: Yup.string().min(6).required(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      login(data);
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
    <SignInTemplate
      formRef={formRef}
      authButtons={authButtons}
      linkTo="/sign-up"
      linkText="Criar Conta"
      buttonName="sign-in-button"
      textInputName="nickname"
      buttonChildren="Entrar"
      textInputLabel="Usuário ou apelido"
      passwordInputLabel="Senha"
      passwordInputName="password"
      handleSignIn={handleSignIn}
    />
  );
};

export default SignInPage;
