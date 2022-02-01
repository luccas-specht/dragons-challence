import { v4 as uuidV4 } from 'uuid';

import { fakeDelay } from '~/utils';
import { SubmitDataDTO } from '~/models';

import userAvatar from '../../../../public/images/this-person-does-not-exists.jpg';

export const useSignInRequest = () => {
  const doCallAPI = async (data: SubmitDataDTO) => {
    await fakeDelay();

    return {
      token: uuidV4(),
      user: {
        nickname: data.nickname,
        avatarUrl: userAvatar,
      },
    };
  };

  return {
    call: doCallAPI,
  };
};
