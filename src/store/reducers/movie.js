import { SHOW_MOVIE } from '../actions/actionTypes';

const initialState = {
  title: '',
  poster: '',
  ratings: '',
  releasedDate: '',
  plot: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MOVIE:
      return {
        ...state,
        title: action.data.Title,
        poster: action.data.Poster,
        ratings: action.data.Ratings,
        releasedDate: action.data.Released,
        plot: action.data.Plot,
      };

    default:
      return state;
  }
};
