import { MutableRefObject } from 'react';
import { Form } from '@unform/web';

import { CreateDragonDTO } from '~/models';
import { Button, Text, TextInput } from '~/components';

import styles from './dragon-form.module.scss';

type Props = {
  title?: string;
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

export const DragonForm = ({
  title = 'Crie seu dragão',
  formRef,
  buttonName,
  buttonChildren,
  textInputDragonName,
  textInputDragonType,
  textInputDragonHistory,
  textInputLabelDragonName,
  textInputLabelDragonType,
  textInputLabelDragonHistory,
  handleSubmit,
}: Props) => {
  return (
    <div className={styles['container-main']}>
      <aside className={styles['container-main__title']}>
        <Text value={title} />
      </aside>
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        className={styles['container-main__form']}
      >
        <TextInput
          name={textInputDragonName}
          placeholder={textInputLabelDragonName}
        />
        <TextInput
          name={textInputDragonType}
          placeholder={textInputLabelDragonType}
        />
        <TextInput
          name={textInputDragonHistory}
          placeholder={textInputLabelDragonHistory}
        />
        <Button type="submit" name={buttonName}>
          {buttonChildren}
        </Button>
      </Form>
    </div>
  );
};
