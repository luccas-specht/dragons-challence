import { buildURL } from '~/utils';
import { DragonType } from '~/models';
import { DRAGONS_URLS } from '~/constants';
import { useAxiosRequest } from '../use-requests';

export const useGetDragonDetails = () => {
  const { get } = useAxiosRequest({ url: DRAGONS_URLS.BASE_URL });

  const doCallApi = async (dragonId: string) => {
    const { data, error } = await get<DragonType, string>({
      route: buildURL('', dragonId),
    });

    return { data, error };
  };

  return {
    call: doCallApi,
  };
};
