import { Layout } from '../shared';
import { DragonsType } from '~/models';
import { WapperDragonsComponent } from '~/components';

type Props = {
  dragons: DragonsType;
};
export const ListDragonsTemplate = ({ dragons }: Props) => (
  <Layout>
    <WapperDragonsComponent dragons={dragons} />
  </Layout>
);
