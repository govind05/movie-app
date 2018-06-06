import {SHOW_MOVIE, USER_RATING} from './actionTypes';

export const showMovie = (movieData) => ({
  type: SHOW_MOVIE,
  data: movieData
});

export const onUserRating = (rating) => ({
  type: USER_RATING,
  rating,
})

