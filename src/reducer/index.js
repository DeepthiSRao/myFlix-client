import { combineReducers } from 'redux';
import { HIDE_LOADER, SET_FILTER, SET_MOVIES, SHOW_LOADER } from '../utils/constant';

const visibilityFilter = ( state = '', action ) => {
    switch(action.type){
        case SET_FILTER:
            return action.value;
        default:
            return state;
    }
}

const movies = ( state = [], action ) => {
    switch(action.type){
        case SET_MOVIES:
            return action.movies;
        default:
            return state;
    }
}

const loading = ( state = false, action ) => {
    switch(action.type){
        case SHOW_LOADER:
            return true;
        case HIDE_LOADER:
            return false;
        default:
            return state;
    }
}

export default combineReducers({
    visibilityFilter,
    movies,
    loading
});