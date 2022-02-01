import { SubmitDataDTO } from '~/models';
import { MainForm, PublicLayout } from '~/components';

import styles from './sign-up-template.module.scss';
import { MutableRefObject } from 'react';

type Props = {
  formRef: MutableRefObject<null>;
  linkTo: string;
  linkText: string;
  buttonName: string;
  buttonChildren: string | JSX.Element;
  textInputName: string;
  textInputLabel: string;
  passwordInputLabel: string;
  passwordInputName: string;
  handleSignUp: (data: SubmitDataDTO) => Promise<void>;
};

export const SignUpTemplate = ({
  formRef,
  linkTo,
  linkText,
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
      buttonChildren={buttonChildren}
      passwordInputName={passwordInputName}
      passwordInputLabel={passwordInputLabel}
      handleSubmit={handleSignUp}
    />
  </PublicLayout>
);
