import { AxiosResponse } from 'axios';
import { IMovie, ISearchItem } from './common';

type APIResponse<T> = {
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
};

export type TFetchMoviesResponse = AxiosResponse<
  APIResponse<IMovie[]> & { dates: { maximum: string; minimum: string } }
>;

export type TSearchMultiResponse = AxiosResponse<APIResponse<ISearchItem[]>>;
