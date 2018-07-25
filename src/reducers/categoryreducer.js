import { GET_CATEGORIES, LOAD_CATEGORIES, ERROR_CATEGORIES } from "../actions/types";
import { List, Map } from "immutable";

const INITIAL_STATE = Map({
    categories: List([]),
    loading: false,
    errorLoading: false
})

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return state.set('categories', List(action.payload));
        case LOAD_CATEGORIES:
            return state.set('loading', action.loading);
        case ERROR_CATEGORIES:
            return state.set('errorLoading', action.errorCategories);
        default:
            return state;
    }
}