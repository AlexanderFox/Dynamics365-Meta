import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export type Params<T = Record<string, any>> = {
  url: string;
  method?: 'get' | 'post' | 'patch' | 'delete';
  data?: T;
  params?: Record<string, any>;
  timeout?: number;
  tries?: number;
};

export const getRequest = (Authorization: string, baseURL: string) => {
  return async <R, T = Record<string, any>>(props: Params<T>): Promise<AxiosResponse<R>> => {
    const { method = 'get', tries, ...rest } = props;
    const request = () =>
      axios.request<R>({
        baseURL,
        method,
        ...rest,
        headers: { Authorization },
      } as AxiosRequestConfig);
    if (tries) {
      const sendRequest = async (tries: number) => {
        try {
          return await request();
        } catch (e) {
          if (e.code === 'ECONNABORTED' && tries > 0) {
            return await sendRequest(tries - 1);
          } else {
            throw e;
          }
        }
      };
      return sendRequest(tries);
    }
    return request();
  };
};
