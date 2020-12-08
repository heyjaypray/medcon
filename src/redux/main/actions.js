import db_url from '../db_url';
import axios from 'axios';
// import Cookies from 'js-cookie';


export const GET_CONFERENCES = 'GET_CONFERENCES';
export const GET_COURSES = 'GET_COURSES';
export const SELECT_VIDEO = 'SELECT_VIDEO';

export function getConferences(amt) {
  return async function (dispatch) {
    const res = await axios.get(`${db_url}/conferences?_limit=${amt}`);
  
    const data = await res.data;
    return dispatch({
      type: GET_CONFERENCES,
      data: data,
    });
  };
}

export function getCourses(amt) {
  return async function (dispatch) {
    const res = await axios.get(`${db_url}/courses?_limit=${amt}`);
  
    const data = await res.data;
    return dispatch({
      type: GET_COURSES,
      data: data,
    });
  };
}

export function selectVideo(id) {
  return async function (dispatch) {
    return dispatch({
      type: SELECT_VIDEO,
      data: id,
    });
  };
}