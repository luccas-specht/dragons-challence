import { AxiosError, AxiosRequestConfig } from 'axios';

import { buildURL } from '../../../utils';
import { HTTP_METHODS } from '../../../constants';
import { useAxiosMockApi } from '../../../services';
import { Response, ResponseType } from '../../../models';

type Config = {
  url?: string;
};

export const useAxiosRequest = ({ url = '' }: Config): Response => {
  const { request } = useAxiosMockApi();

  const callAPI = async <Data, Error>(
    axiosConfig: AxiosRequestConfig
  ): Promise<ResponseType<Data, Error>> => {
    try {
      const { data } = await request<Data>(axiosConfig);

      return {
        data,
        error: null,
      };
    } catch (error: any) {
      const { message, response }: AxiosError<Error> = error;

      return {
        data: null,
        error: response?.data ?? message,
      };
    }
  };

  return {
    post: async <Data, Error>({ route = '', data = {} }) =>
      callAPI<Data, Error>({
        url: buildURL(url, route),
        method: HTTP_METHODS.POST,
        data,
      }),
    get: async <Data, Error>({ route = '', params = {} }) =>
      callAPI<Data, Error>({
        url: buildURL(url, route),
        method: HTTP_METHODS.GET,
        params,
      }),
    put: async <Data, Error>({ route = '', data = {} }) =>
      callAPI<Data, Error>({
        url: buildURL(url, route),
        method: HTTP_METHODS.PUT,
        data,
      }),
    del: async <Data, Error>({ route = '' }) =>
      callAPI<Data, Error>({
        url: buildURL(url, route),
        method: HTTP_METHODS.DEL,
      }),
  };
};
