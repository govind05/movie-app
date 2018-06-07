import {
  ADD_TO_WATCHED,
  REMOVE_FROM_WATCHED,
  USER_RATING
} from './actionTypes';

export const addToWatched = (title, poster, releasedDate) => ({
  type: ADD_TO_WATCHED,
  title,
  poster,
  releasedDate
})
export const removeFromWatched = (title) => ({
  type: REMOVE_FROM_WATCHED,
  title,
})

export const onUserRating = (rating, title) => ({
  type: USER_RATING,
  rating,
  title,
})

