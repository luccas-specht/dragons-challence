import { DragonsType } from '~/models';
import { PrivateLayout, WapperDragonsComponent } from '~/components';

type Props = {
  dragons: DragonsType;
  isLoading: boolean;
  onDeleteDragon: (id: string) => void;
};

export const ListDragonsTemplate = ({
  dragons,
  isLoading,
  onDeleteDragon,
}: Props) => (
  <PrivateLayout>
    <WapperDragonsComponent
      dragons={dragons}
      isLoading={isLoading}
      onDeleteDragon={onDeleteDragon}
    />
  </PrivateLayout>
);
