import { combineReducers } from 'redux';
import { SET_FILTER, SET_MOVIES } from '../utils/constant';

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

export default movieAppReducer = combineReducers({
    visibilityFilter,
    movies
});