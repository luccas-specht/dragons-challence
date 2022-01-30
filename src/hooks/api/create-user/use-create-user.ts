import { fakeDelay } from '~/utils';
import { SubmitDataDTO } from '~/models';

export const useCreateUser = () => {
  const doCallCreateUserAPi = async (data: SubmitDataDTO) => {
    await fakeDelay();
  };

  return {
    callAPI: doCallCreateUserAPi,
  };
};
