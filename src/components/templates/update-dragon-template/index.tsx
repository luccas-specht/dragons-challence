import { MutableRefObject } from 'react';

import { PrivateLayout, DragonForm } from '~/components';
import { InitialValuesUpdateDragonForm, UpdateDragonDTO } from '~/models';

import styles from './update-dragon-template.module.scss';

type Props = {
  formRef: MutableRefObject<null>;
  buttonName: string;
  initalValues: InitialValuesUpdateDragonForm;
  buttonChildren: string | JSX.Element;
  textInputDragonName: string;
  textInputLabelDragonName: string;
  textInputDragonType: string;
  textInputLabelDragonType: string;
  textInputDragonHistory: string;
  textInputLabelDragonHistory: string;
  handleSubmit: (dragon: UpdateDragonDTO) => Promise<void>;
};

export const UpdateDragonTemplate = ({
  formRef,
  buttonName,
  initalValues,
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
      title="Editar dragão"
      formRef={formRef}
      buttonName={buttonName}
      initalValues={initalValues}
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
