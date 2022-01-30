export const fakeDelay = (amount = 1500) =>
  new Promise((resolve) => setTimeout(resolve, amount));
