import { buildURL } from '~/utils';
import { DRAGONS_URLS } from '~/constants';
import { useAxiosRequest } from '../use-requests';

export const useDeleteDragon = () => {
  const { del } = useAxiosRequest({ url: DRAGONS_URLS.BASE_URL });

  const doCallApi = async (dragonId: string) => {
    const { data, error } = await del<any, string>({
      route: buildURL('', dragonId),
    });

    return { data, error };
  };

  return {
    call: doCallApi,
  };
};
