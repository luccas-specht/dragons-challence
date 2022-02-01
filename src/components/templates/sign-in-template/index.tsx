import { MutableRefObject } from 'react';

import { AuthButtons, SubmitDataDTO } from '~/models';
import { PublicLayout, MainForm, Spinner } from '~/components';

import styles from './sign-in-template.module.scss';

type Props = {
  linkTo: string;
  formRef: MutableRefObject<null>;
  isLoading: boolean;
  linkText: string;
  buttonName: string;
  authButtons?: AuthButtons;
  buttonChildren: string | JSX.Element;
  textInputName: string;
  textInputLabel: string;
  passwordInputLabel: string;
  passwordInputName: string;
  handleSignIn: (data: SubmitDataDTO) => Promise<void>;
};

export const SignInTemplate = ({
  linkTo,
  formRef,
  linkText,
  isLoading,
  buttonName,
  authButtons,
  buttonChildren,
  textInputLabel,
  textInputName,
  passwordInputName,
  passwordInputLabel,
  handleSignIn,
}: Props) => (
  <PublicLayout className={styles['sign-in-template']}>
    <MainForm
      formRef={formRef}
      authButtons={authButtons}
      linkTo={linkTo}
      linkText={linkText}
      buttonName={buttonName}
      textInputName={textInputName}
      textInputLabel={textInputLabel}
      buttonChildren={
        isLoading ? (
          <Spinner className={styles['sign-in-template__spinner']} />
        ) : (
          buttonChildren
        )
      }
      passwordInputName={passwordInputName}
      passwordInputLabel={passwordInputLabel}
      handleSubmit={handleSignIn}
    />
  </PublicLayout>
);
