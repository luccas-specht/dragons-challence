import { useCallback } from 'react';
import type { NextPage } from 'next';

import { useUser } from '../hooks';
import { SignInTemplate } from '../components';
import { SignInSubmitDataDTO } from '../models';

const Login: NextPage = () => {
  const { signIn } = useUser();

  const handleSignIn = useCallback(
    (data: SignInSubmitDataDTO) => signIn(data),
    [signIn]
  );

  return <SignInTemplate handleSignIn={handleSignIn} />;
};

export default Login;
