import { SubmitDataDTO } from '~/models';
import { MainForm, Layout } from '~/components';

import styles from './sign-up-template.module.scss';

type Props = {
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
  <Layout className={styles['sign-up-template']}>
    <MainForm
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
  </Layout>
);
