import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { ALL_GENRES } from '../const/genres';
import {
  fetchFavoriteFilms,
  fetchFilmById,
  fetchFilmReviews,
  fetchFilms,
  fetchPromoFilm,
  fetchSimilarFilms,
  getMoviesGenre,
  setActiveGenre,
  setAuthStatus,
  setIsLoadingFilm,
  setIsLoadingFilms
} from './action';
import { IFilmProps, IFilmDetailsProps, IFilmPromo } from '../types/film-type';
import { IReviewProps } from '../types/review-type';
import { AuthStatus } from '../enums/AuthStatus';

interface IState {
	films: IFilmProps[];
	activeGenre: string | typeof ALL_GENRES;
	genreMovies: IFilmProps[];
	currentFilm: IFilmDetailsProps | null;
	promoFilm: IFilmPromo | null;
	isLoadingFilms: boolean;
	isLoadingFilm: boolean;
	favoriteFilms: IFilmProps[];
	reviews: IReviewProps[];
	similarFilms: IFilmProps[];
	authStatus: AuthStatus;
}

const initState: IState = {
  films: [],
  activeGenre: ALL_GENRES,
  genreMovies: [],
  currentFilm: null,
  promoFilm: null,
  isLoadingFilms: true,
  isLoadingFilm: true,
  favoriteFilms: [],
  reviews: [],
  similarFilms: [],
  authStatus: AuthStatus.Unknown,
};

export const reducer = createReducer(initState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action: PayloadAction<{ genre: string }>) => {
      const { genre } = action.payload;
      state.activeGenre = genre;
    })
    .addCase(getMoviesGenre, (state) => {
      state.genreMovies = state.activeGenre === ALL_GENRES ? state.films : state.films.filter((film) => film.genre === state.activeGenre);
    })
    .addCase(fetchPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(fetchFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(fetchFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
    })
    .addCase(fetchFilmById, (state, action) => {
      state.currentFilm = action.payload;
    })
    .addCase(fetchFilmReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(fetchSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(setIsLoadingFilms, (state, action) => {
      state.isLoadingFilms = action.payload;
    })
    .addCase(setIsLoadingFilm, (state, action) => {
      state.isLoadingFilm = action.payload;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    });
});
