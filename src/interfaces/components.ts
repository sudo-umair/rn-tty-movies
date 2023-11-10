import { IMovie, ISearchItem } from './common';

export interface IMovieItemProps {
  movie: IMovie;
}

export interface ISearchBarProps {
  value: string;
  onChange: (value: string) => void;
  setSearchCompleted: () => void;
}

export interface ISearchScreenHeaderProps {
  count: number;
}
export interface ISearchItemProps {
  item: ISearchItem;
}
