import { ADD_TO_WATCHED, REMOVE_FROM_WATCHED } from './actionTypes';

export const addToWatched = (title, poster) => ({
  type: ADD_TO_WATCHED,
  title,
  poster
})
export const removeFromWatched = (title) => ({
  type: REMOVE_FROM_WATCHED,
  title,
})
