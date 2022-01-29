import { v4 as uuidV4 } from 'uuid';

import { SignInSubmitDataDTO } from '../../../models';

const delay = (amount = 1500) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export const signInRequest = async (data: SignInSubmitDataDTO) => {
  await delay();

  return {
    token: uuidV4(),
    user: {
      nickname: data.nickname,
      avatarUrl: 'https://github.com/luccas-specht.png',
    },
  };
};
