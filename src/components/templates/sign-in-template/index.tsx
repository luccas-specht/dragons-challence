import { AuthButtons, SubmitDataDTO } from '~/models';
import { Layout, MainForm, WrapperAuthButtons } from '~/components';

import styles from './sign-in-template.module.scss';

type Props = {
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
  <Layout className={styles['sign-in-template']}>
    <MainForm
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
  </Layout>
);
