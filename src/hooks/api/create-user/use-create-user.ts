import { fakeDelay } from '~/utils';
import { SignUpSubmitDataDTO } from '~/models';

export const useCreateUser = () => {
  const doCallCreateUserAPi = async (data: SignUpSubmitDataDTO) => {
    await fakeDelay();
  };

  return {
    callAPI: doCallCreateUserAPi,
  };
};
