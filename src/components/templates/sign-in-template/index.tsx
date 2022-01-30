import { MainForm } from '~/components';
import { SubmitDataDTO } from '~/models';

type Props = {
  buttonName: string;
  buttonChildren: string | JSX.Element;
  textInputName: string;
  textInputLabel: string;
  passwordInputLabel: string;
  passwordInputName: string;
  handleSignIn: (data: SubmitDataDTO) => Promise<void>;
};

export const SignInTemplate = ({
  buttonName,
  buttonChildren,
  textInputLabel,
  textInputName,
  passwordInputName,
  passwordInputLabel,
  handleSignIn,
}: Props) => (
  <MainForm
    buttonName={buttonName}
    textInputName={textInputName}
    textInputLabel={textInputLabel}
    buttonChildren={buttonChildren}
    passwordInputName={passwordInputName}
    passwordInputLabel={passwordInputLabel}
    handleSubmit={handleSignIn}
  />
);
