import { MutableRefObject } from 'react';

import { SubmitDataDTO } from '~/models';
import { MainForm, PublicLayout, Spinner } from '~/components';

import styles from './sign-up-template.module.scss';

type Props = {
  linkTo: string;
  formRef: MutableRefObject<null>;
  linkText: string;
  isLoading: boolean;
  buttonName: string;
  buttonChildren: string | JSX.Element;
  textInputName: string;
  textInputLabel: string;
  passwordInputLabel: string;
  passwordInputName: string;
  handleSignUp: (data: SubmitDataDTO) => Promise<void>;
};

export const SignUpTemplate = ({
  linkTo,
  formRef,
  linkText,
  isLoading,
  buttonName,
  buttonChildren,
  textInputLabel,
  textInputName,
  passwordInputName,
  passwordInputLabel,
  handleSignUp,
}: Props) => (
  <PublicLayout className={styles['sign-up-template']}>
    <MainForm
      formRef={formRef}
      linkTo={linkTo}
      linkText={linkText}
      buttonName={buttonName}
      textInputName={textInputName}
      textInputLabel={textInputLabel}
      buttonChildren={
        isLoading ? (
          <Spinner className={styles['sign-up-template__spinner']} />
        ) : (
          buttonChildren
        )
      }
      passwordInputName={passwordInputName}
      passwordInputLabel={passwordInputLabel}
      handleSubmit={handleSignUp}
    />
  </PublicLayout>
);
