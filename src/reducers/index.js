import { createStore, applyMiddleware } from "redux";
import categoryreducer from "./categoryreducer";
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import sourcesreducer from "./sourcesreducer";
import newsreducer from "./newsreducer";
import { combineReducers } from "redux-immutable";
import Immutable from "immutable";

const initial_store = Immutable.Map();

const rootreducer = combineReducers({
    categories: categoryreducer,
    sources: sourcesreducer,
    news: newsreducer
})

const middleWares = [ReduxThunk]

if(process.env.NODE_ENV === 'development') {
    middleWares.push(ReduxLogger);
}

const store = createStore(
    rootreducer,
    initial_store,
    applyMiddleware(...middleWares)
)

export default store;