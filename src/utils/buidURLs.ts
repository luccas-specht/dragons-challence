export const buildURL = (
  url: string,
  route: string | number | Array<string | number>
): string => {
  const urlArray = Array.isArray(route) ? [url, ...route] : [url, route];

  return urlArray.join('/');
};

export const buildURLWithParams = (url: string, params: any): string => {
  const entries: [string, any][] = params && Object.entries(params);

  if (!entries?.length) return url;

  const paramString = entries
    .map((entry) => `${entry[0]}=${entry[1]}`)
    .join('&');

  return `${url}?${paramString}`;
};
