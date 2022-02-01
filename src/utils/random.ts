import { DEFAULT_DRAGONS_AVATAR } from '~/constants';

export const getARandomDragonAvatar = (array = DEFAULT_DRAGONS_AVATAR) => {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};
