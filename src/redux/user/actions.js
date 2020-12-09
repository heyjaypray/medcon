import db_url from '../db_url';
import axios from 'axios';
import Cookies from 'js-cookie';

export const LOGIN_USER = 'LOGIN_USER';
export const GET_USER = 'GET_USER';
export const LOGOUT = 'LOGOUT';
export const ADD_COURSE_TO_USER = 'ADD_COURSE_TO_USER';


export function loginUser(email, password, history) {
  return async function (dispatch) {

    axios.post(`${db_url}/auth/local`, {
      identifier: email,
      password: password
    })
      .then(async (response) => {
        if (!process.browser) {
          return;
        }
        await Cookies.set('id', response.data.user.id);
        await Cookies.set('jwt', response.data.jwt, { expires: 0.8 });
        await dispatch({
          type: LOGIN_USER,
          data: response.data.user,
        });
        await history.push('/account');
        return;
      })
      .catch((error) => {
        console.log('Problem submitting New Post', error);
        //   NotificationManager.error('Login Credentials Incorrect', 'Error', 2000);
      });
  };
}

export const getUser = (id, cookie) => {
  return async function (dispatch) {
  
    const res = await axios.get(`${db_url}/users/${id}`,
      {
        headers: {
          'Authorization': `Bearer ${cookie}`
        }
      }
    );
  
    const data = await res.data;
  
    return dispatch({
      type: GET_USER,
      data: data,
    });
  };
};

export const logout = (history) => {
  return async function (dispatch) {
  
    Cookies.remove('jwt');
    Cookies.remove('id');
    
    // to support logging out from all windows
    window.localStorage.setItem('logout', Date.now());
  
    history.push('/');
  
    return dispatch({
      type: LOGOUT,
    });
  };
};

export function addCourseToUser(id, obj) {
  
  return async function (dispatch) {

    const res = await axios.put(`${db_url}/users/${id}`, obj);
    const data = await res.data;
    await alert('COURSE ADDED');
    return dispatch({
      type: ADD_COURSE_TO_USER,
      data: data,
    });
  };
}