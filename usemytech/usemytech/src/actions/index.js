import axios from "axios";
import { axiosWithAuth } from '../axiosWithAuth'

import { history } from "../helpers/history";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
 return axios
    .post("https://usemytechstuffapp.herokuapp.com/api/login", creds)
    .then(res => {
        console.log('hello',res.data)
        localStorage.setItem('token', res.data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
    })
    .catch(err => {
        dispatch({ type: LOGIN_FAILURE, payload: err })
    })
};


export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signUp = user => dispatch => {
    dispatch({ type: SIGNUP_START })
    return axios
        .post('https://usemytechstuffapp.herokuapp.com/api/register', user)
        .then(res => {
            console.log('response', res);
            dispatch({ type: SIGNUP_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: SIGNUP_FAILURE, payload: err })
        })
}


export const ADD_ITEM_START = ' ADD_ITEM_START';
export const  ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const addItem = item => dispatch => {
    dispatch({  type: ADD_ITEM_START })
    return axiosWithAuth().post('https://usemytechstuffapp.herokuapp.com/api/items', item)
    .then(res => {
        console.log(res);
        dispatch({ type: ADD_ITEM_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: ADD_ITEM_FAILURE, payload: err })
    })
}

export const FETCH_ITEM_START = 'FETCH_ITEM_START';
export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS';
export const FETCH_ITEM_FAILURE = 'FETCH_ITEM_FAILURE';

export const fetchItems = () => dispatch => {
    dispatch({ type: FETCH_ITEM_START });
    return axios.get('https://usemytechstuffapp.herokuapp.com/api/items')
    .then(res => {
        console.log(res)
        dispatch({ type: FETCH_ITEM_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatchEvent({ type: ADD_ITEM_FAILURE, payload: err })
    })
}

export function logout() {
    localStorage.removeItem('user')
}