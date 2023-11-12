import { API } from '@/constants/api';
import { genres } from '@/constants/data';
import { ColorValue } from 'react-native';

export const findGenres = (genreIds: number[]): string[] => {
  if (Array.isArray(genreIds) && genreIds.length > 0) {
    const genreNames = genreIds.map((id) => {
      const genre = genres.find((genre) => genre.id === id);
      return genre ? genre.name : '';
    });
    return genreNames.filter((name) => name !== '');
  } else {
    return ['N/A'];
  }
};

export const constructImageUrl = (backdrop_path: string): string => {
  return backdrop_path ? `${API.IMAGE_URL}${backdrop_path}?api_key=${API.API_KEY}` : '';
};

export const randomBGColorGenerator = (text: string): string => {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = Math.abs(hash) % 16777216;
  const hexColor = color.toString(16).padStart(6, '0');
  return `#${hexColor}`;
};

export const isColorDark = (color: ColorValue): boolean => {
  const sanitizedColor = color.toString().replace('#', '');
  const red = parseInt(sanitizedColor.substring(0, 2), 16);
  const green = parseInt(sanitizedColor.substring(2, 4), 16);
  const blue = parseInt(sanitizedColor.substring(4, 6), 16);
  const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;
  return luminance <= 0.5;
};
