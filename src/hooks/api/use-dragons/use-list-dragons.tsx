import { Dragons } from '../../../models';
import { useAxiosRequest } from '../use-requests';

export const useListAllDragons = () => {
  const { get } = useAxiosRequest({ url: '' });

  return {
    call: async () =>
      get<Dragons, string>({
        route: '',
      }),
  };
};
