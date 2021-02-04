import { FETCH_MOVIES, ADD_TO_WATCHLIST, ADD_TO_WATCHED } from "./types";
import movies from "../apis/theMovieDatabase";

export const fetchMovies = (query) => {
  return async (dispatch) => {
    const res = await movies.get(`/${query.replaceAll(" ", "+")}`);

    dispatch({
      type: FETCH_MOVIES,
      payload: res.data.results,
    });
  };
};

export const addToWatchlist = (movie) => {
  return {
    type: ADD_TO_WATCHLIST,
    payload: movie,
  };
};

export const addToWatched = (movie) => {
  return {
    type: ADD_TO_WATCHED,
    payload: movie,
  };
};
