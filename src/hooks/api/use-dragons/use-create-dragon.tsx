import { DRAGONS_URLS } from '~/constants';
import { useAxiosRequest } from '../use-requests';
import { DragonType, CreateDragonDTO } from '~/models';

export const useCreateDragon = () => {
  const { post } = useAxiosRequest({ url: DRAGONS_URLS.BASE_URL });

  const doCallApi = async (dragonProperties: CreateDragonDTO) => {
    const { data, error } = await post<DragonType, string>({
      data: dragonProperties,
    });

    return { data, error };
  };

  return {
    call: doCallApi,
  };
};
