import { ADD_TO_WATCHED, REMOVE_FROM_WATCHED } from '../actions/actionTypes';

const initialState = {
  movies: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_TO_WATCHED: {
      const movie = state.movies.filter(movie => movie.title === action.title);
      if (movie.length === 0) {

        const movies = state.movies.concat({
          title: action.title,
          poster: action.poster
        });
        return {
          ...state,
          movies
        }
      }
      return {
        ...state
      }
    }

    case REMOVE_FROM_WATCHED: {
      const { title } = action;
      const movies = state.movies.filter(movie => movie.title !== title);
      return {
        ...state,
        movies
      }
    }

    default:
      return state
  }
}
