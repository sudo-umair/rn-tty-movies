export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type TContentType = 'movie' | 'tv';

export interface ISearchItem extends IMovie {
  name: string;
  media_type: TContentType;
  first_air_date: '2018-08-27';
  origin_country: ['FR'];
}
