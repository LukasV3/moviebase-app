import movies from "../apis/theMovieDatabase";
import {
  FETCH_MOVIES,
  ADD_TO_WATCHLIST,
  ADD_TO_WATCHED,
  DELETE_FROM_WATCHLIST,
  DELETE_FROM_WATCHED,
  CLEAR_FETCHED_MOVIES,
} from "./types";

export const fetchMovies = (query) => {
  return async (dispatch) => {
    const res = await movies.get(`/${query.replaceAll(" ", "+")}`);

    dispatch({
      type: FETCH_MOVIES,
      payload: res.data.results,
    });
  };
};

export const clearFetchedMovies = () => {
  return {
    type: CLEAR_FETCHED_MOVIES,
    payload: null,
  };
};

// WATCHLIST
export const addToWatchlist = (movie) => {
  return {
    type: ADD_TO_WATCHLIST,
    payload: movie,
  };
};

export const deleteFromWatchlist = (movie) => {
  return {
    type: DELETE_FROM_WATCHLIST,
    payload: movie,
  };
};

// WATCHED

export const addToWatched = (movie) => {
  return {
    type: ADD_TO_WATCHED,
    payload: movie,
  };
};

export const deleteFromWatched = (movie) => {
  return {
    type: DELETE_FROM_WATCHED,
    payload: movie,
  };
};
