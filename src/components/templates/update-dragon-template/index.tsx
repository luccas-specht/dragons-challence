import { MutableRefObject } from 'react';

import { PrivateLayout, DragonForm, Spinner } from '~/components';
import { InitialValuesUpdateDragonForm, UpdateDragonDTO } from '~/models';

import styles from './update-dragon-template.module.scss';

type Props = {
  formRef: MutableRefObject<null>;
  buttonName: string;
  isLoading: boolean;
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
  isLoading,
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
  <PrivateLayout className={styles['update-dragon-template']}>
    <DragonForm
      title="Editar dragão"
      formRef={formRef}
      buttonName={buttonName}
      initalValues={initalValues}
      buttonChildren={
        isLoading ? (
          <Spinner className={styles['update-dragon-template__spinner']} />
        ) : (
          buttonChildren
        )
      }
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
