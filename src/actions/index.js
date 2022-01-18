import { SET_FILTER, SET_MOVIES } from "../utils/constant";

export const setMovies = (movies) => ({
    type: SET_MOVIES,
    movies
});

export const setFilter = (value) => ({
    type: SET_FILTER,
    value
});