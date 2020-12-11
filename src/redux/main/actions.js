import db_url from '../db_url';
import axios from 'axios';
// import Cookies from 'js-cookie';


export const GET_CONFERENCES = 'GET_CONFERENCES';
export const GET_COURSES = 'GET_COURSES';
export const SELECT_COURSE = 'SELECT_COURSE';
export const ADD_COURSE_TO_USER = 'ADD_COURSE_TO_USER';

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

export function selectCourse(id) {
  
  return async function (dispatch) {

    const res = await axios.get(`${db_url}/courses/${id}`);
    const data = await res.data;
    return dispatch({
      type: SELECT_COURSE,
      data: data,
    });
  };
}


