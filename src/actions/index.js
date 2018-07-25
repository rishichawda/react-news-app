import { API_KEY } from "./config";
import { GET_CATEGORIES, LOAD_CATEGORIES, ERROR_CATEGORIES, GET_SOURCES, LOAD_SOURCES, ERROR_SOURCES, GET_NEWS, LOAD_NEWS, ERROR_NEWS } from "./types";
import axios from "axios";
import _ from 'lodash';
import { List } from "immutable";

const ROOT_URL = 'https://newsapi.org/v2/'

export function getCategories() {
    return dispatch => {
        dispatch(loadingCategories(true));
        const url = `${ROOT_URL}sources?apiKey=${API_KEY}`;
        axios.get(url).then(
            (response) => {
                if(response.status !== 200) {
                    throw Error(response.statusText);
                }
                dispatch(loadingCategories(false));
                return response;
            }
        ).then(
            response => dispatch(recievedCategories(response.data))
        ).catch(
            () => errFetchCategories(true)
        )
    }
}

function recievedCategories(data) {
    const cat_list = _.uniq(data.sources.map(
        item => item.category
    ))
    return {
        type: GET_CATEGORIES,
        payload: List(cat_list)
    }
}

function loadingCategories(status) {
    // console.log(status)
    return {
        type: LOAD_CATEGORIES,
        loading: status
    }
}

function errFetchCategories(status) {
    // console.log('error in fetching');
    return {
        type: ERROR_CATEGORIES,
        errorCategories: status
    }
}

export function getSources(category) {
    return dispatch => {
        dispatch(loadingSources(true));
        const url = `${ROOT_URL}sources?category=${category}&apiKey=${API_KEY}`;
        console.log(url);
        axios.get(url).then(
            (response) => {
                if(response.status !== 200) {
                    throw Error(response.statusText);
                }
                dispatch(loadingSources(false));
                return response;
            }
        ).then(
            response => dispatch(recievedSources(response.data))
        ).catch(
            () => errFetchSources(true)
        )
    }
}

function recievedSources(data) {
    const cat_list = _.uniq(data.sources.map(
        item => item.id
    ))
    return {
        type: GET_SOURCES,
        payload: List(cat_list)
    }
}

function loadingSources(status) {
    return {
        type: LOAD_SOURCES,
        loading: status
    }
}

function errFetchSources(status) {
    return {
        type: ERROR_SOURCES,
        errorSources: status
    }
}

export function getNews(source, type) {
    type = type || 'top-headlines';
    return dispatch => {
        dispatch(loadingNews(true));
        const url = `${ROOT_URL}${type}?sources=${source}&pageSize=100&apiKey=${API_KEY}`;
        axios.get(url).then(
            (response) => {
                if(response.status !== 200) {
                    throw Error(response.statusText);
                }
                dispatch(loadingNews(false));
                return response;
            }
        ).then(
            response => dispatch(recievedNews(response.data))
        ).catch(
            () => errFetchNews(true)
        )
    }
}

export function recievedNews(data) {
    return {
        type: GET_NEWS,
        payload: data.articles
    }
}

export function loadingNews(status) {
    return {
        type: LOAD_NEWS,
        loading: status
    }
}

export function errFetchNews(status) {
    return {
        type: ERROR_NEWS,
        errorNews: status
    }
}