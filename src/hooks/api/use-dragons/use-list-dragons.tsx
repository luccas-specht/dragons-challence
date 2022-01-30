import { DragonsType } from '~/models';
import { DRAGONS_URLS } from '~/constants';
import { useAxiosRequest } from '../use-requests';

export const useListAllDragons = () => {
  const { get } = useAxiosRequest({ url: DRAGONS_URLS.DRAGON });

  return {
    call: async () => get<DragonsType, string>({}),
  };
};
