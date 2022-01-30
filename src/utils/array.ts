import { DragonsType } from '~/models';

export const orderDragonsByName = (array: DragonsType) =>
  array.sort((previousElement, nextElement) =>
    previousElement.name.localeCompare(nextElement.name)
  );
