import { TFetchMoviesResponse } from '@/interfaces/api';
import axiosClient from '.';

export const fetchMovies = async (page: number): Promise<TFetchMoviesResponse> => {
  return await axiosClient.get('/upcoming', { params: { page } });
};
