import { createAction } from '@reduxjs/toolkit';
import { IFilmProps, IFilmDetailsProps, IFilmPromo } from '../types/film-type';
import { IReviewProps } from '../types/review-type';

export const setActiveGenre = createAction<{ genre: string }>('setActiveGenre');

export const getMoviesGenre = createAction('getMoviesGenre');

export const fetchFilms = createAction<IFilmProps[]>('fetchFilmsAction');

export const fetchFilmReviews = createAction<IReviewProps[]>('fetchFilmReviewsAction');

export const fetchFavoriteFilms = createAction<IFilmProps[]>('fetchFavoriteFilmsAction');

export const fetchFilmById = createAction<IFilmDetailsProps>('fetchFilmByIdAction');

export const fetchPromoFilm = createAction<IFilmPromo>('fetchFilmPromoAction');

export const fetchSimilarFilms = createAction<IFilmProps[]>('fetchSimilarFilmsAction');

export const setIsLoadingFilms = createAction<boolean>('setIsLoadingFilms');

export const setIsLoadingFilm = createAction<boolean>('setIsLoadingFilm');