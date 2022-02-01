import { AuthButtons, SubmitDataDTO } from '~/models';
import { PublicLayout, MainForm } from '~/components';

import styles from './sign-in-template.module.scss';
import { MutableRefObject } from 'react';

type Props = {
  formRef: MutableRefObject<null>;
  linkTo: string;
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
  formRef,
  linkTo,
  linkText,
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
      buttonChildren={buttonChildren}
      passwordInputName={passwordInputName}
      passwordInputLabel={passwordInputLabel}
      handleSubmit={handleSignIn}
    />
  </PublicLayout>
);
