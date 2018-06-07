import { ADD_TO_WATCHED, REMOVE_FROM_WATCHED, USER_RATING } from '../actions/actionTypes';

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
          poster: action.poster,
          rating: '',
          releasedDate: action.releasedDate,
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

    case USER_RATING: {
      const index = state.movies.findIndex(movie =>
        movie.title === action.title);
      let movies = state.movies;
      let movie = movies[index];
      const prevRating = movie.rating;
      movie = {
        ...movie,
        rating: prevRating === action.rating
          ? '' : action.rating,
      }
      movies[index] = {
        ...movie,
      }
      return {
        ...state,
        movies: [
          ...movies
        ]
      }

    }
    case REMOVE_FROM_WATCHED: {
      const { title } = action;
      const movies = state.movies.filter(movie =>
        movie.title !== title);
      return {
        ...state,
        movies
      }
    }

    default:
      return state
  }
}
