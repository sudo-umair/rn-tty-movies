import { TFetchMoviesResponse, TSearchMultiResponse } from '@/interfaces/api';
import axiosClient from '.';

export const fetchMovies = async (page: number): Promise<TFetchMoviesResponse> => {
  return await axiosClient.get('/movie/upcoming', { params: { page } });
};

export const searchMulti = async (query: string, page: number): Promise<TSearchMultiResponse> => {
  return await axiosClient.get('/search/multi', { params: { query, page } });
};
