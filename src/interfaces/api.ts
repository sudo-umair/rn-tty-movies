import { AxiosResponse } from 'axios';
import { IMovie } from './common';

type APIResponse<T> = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
};

export type TFetchMoviesResponse = AxiosResponse<APIResponse<IMovie[]>>;
