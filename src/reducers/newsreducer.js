import { GET_NEWS, LOAD_NEWS, ERROR_NEWS } from "../actions/types";
import Immutable, { List } from "immutable";

const INITIAL_STATE = Immutable.Map({
    news: List([]),
    loading: false,
    errorLoading: false
})

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_NEWS:
            return state.set('news', List(action.payload))
        case LOAD_NEWS:
            return state.set('loading', action.loading)
        case ERROR_NEWS:
            return state.set('errorLoading', action.errorNews)
        default:
            return state;
    }
}