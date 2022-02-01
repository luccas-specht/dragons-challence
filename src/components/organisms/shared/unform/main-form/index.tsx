import Link from 'next/link';
import { Form } from '@unform/web';

import { AuthButtons, SubmitDataDTO } from '~/models';
import {
  Text,
  Button,
  TextInput,
  WrapperAuthButtons,
  Banner,
} from '~/components';

import styles from './main-form.module.scss';
import { MutableRefObject } from 'react';

type Props = {
  formRef: MutableRefObject<null>;
  linkTo: string;
  linkText: string;
  buttonName: string;
  authButtons?: AuthButtons;
  textInputName: string;
  textInputLabel: string;
  buttonChildren: string | JSX.Element;
  passwordInputLabel: string;
  passwordInputName: string;
  handleSubmit: (data: SubmitDataDTO) => Promise<void>;
};

export const MainForm = ({
  formRef,
  linkTo,
  linkText,
  buttonName,
  authButtons,
  textInputName,
  textInputLabel,
  buttonChildren,
  passwordInputName,
  passwordInputLabel,
  handleSubmit,
}: Props) => {
  const renderWrapperAuthButtons = () =>
    authButtons &&
    authButtons?.length > 0 && (
      <>
        <WrapperAuthButtons infos={authButtons} />
        <div className={styles['container-main__separator']}>ou</div>
      </>
    );

  return (
    <div className={styles['container-main']}>
      <Banner />
      {renderWrapperAuthButtons()}
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        className={styles['container-main__form']}
      >
        <TextInput name={textInputName} placeholder={textInputLabel} />
        <TextInput
          type="password"
          name={passwordInputName}
          placeholder={passwordInputLabel}
        />
        <Button type="submit" name={buttonName}>
          {buttonChildren}
        </Button>
      </Form>
      <Link href={linkTo}>
        <a>
          <Text value={linkText} className={styles['container-main__link']} />
        </a>
      </Link>
    </div>
  );
};
