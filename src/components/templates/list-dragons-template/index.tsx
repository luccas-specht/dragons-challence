import { PrivateLayout } from '../shared';
import { DragonsType } from '~/models';
import { WapperDragonsComponent } from '~/components';

type Props = {
  dragons: DragonsType;
  onDeleteDragon: (id: string) => void;
};
export const ListDragonsTemplate = ({ dragons, onDeleteDragon }: Props) => (
  <PrivateLayout>
    <WapperDragonsComponent dragons={dragons} onDeleteDragon={onDeleteDragon} />
  </PrivateLayout>
);
