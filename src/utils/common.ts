import { API } from '@/constants/api';
import { genres } from '@/constants/data';
import { TContentType } from '@/interfaces/common';

export const findGenres = (genreIds: number[], type: TContentType): string => {
  if (Array.isArray(genreIds) && genreIds.length > 0) {
    const genreList = genres[type];
    const genreNames = genreIds.map((id) => {
      const genre = genreList.find((genre) => genre.id === id);
      return genre?.name || '';
    });
    return genreNames.join(', ');
  } else {
    return '';
  }
};

export const constructImageUrl = (backdrop_path: string): string => {
  return backdrop_path ? `${API.IMAGE_URL}${backdrop_path}?api_key=${API.API_KEY}` : '';
};
