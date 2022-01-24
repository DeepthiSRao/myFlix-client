import { HIDE_LOADER, SET_FILTER, SET_MOVIES, SHOW_LOADER } from "../utils/constant";

export const setMovies = (movies) => ({
    type: SET_MOVIES,
    movies
});

export const setFilter = (value) => ({
    type: SET_FILTER,
    value
});

export const showLoader = () =>({
    type: SHOW_LOADER
});

export const hideLoader = () =>({
    type: HIDE_LOADER
});