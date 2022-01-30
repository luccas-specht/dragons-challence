import { v4 as uuidV4 } from 'uuid';

import { fakeDelay } from '~/utils';
import { SubmitDataDTO } from '~/models';

export const useSignInRequest = () => {
  const doCallAPI = async (data: SubmitDataDTO) => {
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
