import { MutableRefObject } from 'react';

import { CreateDragonDTO } from '~/models';
import { PrivateLayout, DragonForm } from '~/components';

import styles from './create-dragon-template.module.scss';

type Props = {
  formRef: MutableRefObject<null>;
  buttonName: string;
  buttonChildren: string | JSX.Element;
  textInputDragonName: string;
  textInputLabelDragonName: string;
  textInputDragonType: string;
  textInputLabelDragonType: string;
  textInputDragonHistory: string;
  textInputLabelDragonHistory: string;
  handleSubmit: (dragon: CreateDragonDTO) => Promise<void>;
};

export const CreateDragonTemplate = ({
  formRef,
  buttonName,
  buttonChildren,
  textInputDragonName,
  textInputLabelDragonName,
  textInputDragonType,
  textInputLabelDragonType,
  textInputDragonHistory,
  textInputLabelDragonHistory,
  handleSubmit,
}: Props) => (
  <PrivateLayout className={styles['create-dragon-template']}>
    <DragonForm
      formRef={formRef}
      buttonName={buttonName}
      buttonChildren={buttonChildren}
      textInputDragonName={textInputDragonName}
      textInputLabelDragonName={textInputLabelDragonName}
      textInputDragonType={textInputDragonType}
      textInputLabelDragonType={textInputLabelDragonType}
      textInputDragonHistory={textInputDragonHistory}
      textInputLabelDragonHistory={textInputLabelDragonHistory}
      handleSubmit={handleSubmit}
    />
  </PrivateLayout>
);
