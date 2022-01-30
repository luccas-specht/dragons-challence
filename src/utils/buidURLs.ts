export const buildURL = (
  url: string,
  route: string | number | Array<string | number>
): string => {
  const urlArray = Array.isArray(route) ? [url, ...route] : [url, route];

  return urlArray.join('/');
};
