import { v4 as uuidV4 } from 'uuid';

import { fakeDelay } from '../../../utils';
import { SignInSubmitDataDTO } from '../../../models';

export const useSignInRequest = () => {
  const doCallAPI = async (data: SignInSubmitDataDTO) => {
    await fakeDelay();

    return {
      token: uuidV4(),
      user: {
        nickname: data.nickname,
        avatarUrl: 'https://github.com/luccas-specht.png',
      },
    };
  };

  return {
    call: doCallAPI,
  };
};
