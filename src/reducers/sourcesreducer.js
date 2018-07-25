import { LOAD_SOURCES, ERROR_SOURCES, GET_SOURCES } from "../actions/types";
import { List, Map } from "immutable";

const INITIAL_STATE = Map({
    sources: List([]),
    loading: false,
    errorLoading: false
})

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_SOURCES:
            return state.set('sources', action.payload);
        case LOAD_SOURCES:
            return state.set('loading', action.loading);
        case ERROR_SOURCES:
            return state.set('errorLoading', action.errorSources);
        default:
            return state;
    }
}