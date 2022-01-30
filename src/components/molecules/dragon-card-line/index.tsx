import { Text } from '~/components';
import { formatDate } from '~/utils';

import styles from './dragon-card-line.module.scss';

type Props = {
  name: string;
  type: string;
  createdAt: Date | string;
};

export const DragonCardLine = ({ name, type, createdAt }: Props) => {
  const shouldRenderOriginalPropertyOrDefaultProperty = (
    property: string | null,
    defaultProperty: string
  ) => (property && property.length > 0 ? property : defaultProperty);

  return (
    <aside className={styles['line']}>
      <h3 className={styles['line--title']}>
        {shouldRenderOriginalPropertyOrDefaultProperty(name, 'Alkapone')}
      </h3>
      <Text
        value={shouldRenderOriginalPropertyOrDefaultProperty(type, 'Fogo')}
        className={styles['line--text']}
      />
      <Text
        value={formatDate(createdAt, 'DD/MM')}
        className={styles['line--text']}
      />
    </aside>
  );
};
