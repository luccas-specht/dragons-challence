import { buildURL } from '~/utils';
import { DRAGONS_URLS } from '~/constants';
import { useAxiosRequest } from '../use-requests';
import { DragonType, UpdateDragonDTO } from '~/models';

export const useUpdateDragon = () => {
  const { put } = useAxiosRequest({ url: DRAGONS_URLS.BASE_URL });

  const doCallApi = async (
    dragonId: string,
    dragonProperties: UpdateDragonDTO
  ) => {
    const { data, error } = await put<DragonType, string>({
      route: buildURL('', dragonId),
      data: dragonProperties,
    });

    return { data, error };
  };

  return {
    call: doCallApi,
  };
};
