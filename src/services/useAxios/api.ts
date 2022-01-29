import axios, { AxiosInstance } from 'axios';

export const useAxiosMockApi = (): AxiosInstance =>
  axios.create({
    baseURL: `${process.env.REACT_APP_API_MOCKAPI_URL}`,
  });
