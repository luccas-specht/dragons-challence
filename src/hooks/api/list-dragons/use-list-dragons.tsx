import { Dragons } from '../../../models';
import { useAxiosRequest } from '../use-requests';

export const useListAllDragons = () => {
  const { get } = useAxiosRequest({});

  const doCallApi = async () => get<Dragons, any>({});

  return {
    call: doCallApi,
  };
};
