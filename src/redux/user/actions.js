import db_url from '../db_url';
import axios from 'axios';
import Cookies from 'js-cookie';
import _ from 'lodash';

export const LOGIN_USER = 'LOGIN_USER';
export const GET_USER = 'GET_USER';
export const LOGOUT = 'LOGOUT';
export const ADD_COURSE_TO_USER = 'ADD_COURSE_TO_USER';
export const INIT_MODULES = 'INIT_MODULES';
export const SELECT_COURSE = 'SELECT_COURSE';
export const SET_COURSE_VIDEO = 'SET_COURSE_VIDEO';
export const ADD_COURSE_MODULE = 'ADD_COURSE_MODULE';
export const ADD_VIEWED_VIDEO = 'ADD_VIEWED_VIDEO';

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


export function initModules(user, obj) {
  return async function (dispatch) {
    const Subscribed_Courses = user.Subscribed_Courses.map((i, item) => {
      if(i.id !== obj.id){
        return i;
      } else{
        return {
          ...obj
        };
      }
    });

    const res = await axios.put(`${db_url}/users/${user.id}`, {Subscribed_Courses: Subscribed_Courses});
    const data = await res.data;

    console.log({ data });
    return dispatch({
      type: INIT_MODULES,
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


export function addCourseModule(course, obj, user) {

  const a = _.find(user.Subscribed_Courses, (o) => _.includes(o.course, course.id));
  const b = a.Modules_Viewed;
  const c = _.find(b, (o) => _.includes(o, obj.playlist_id));
  
  let Modules_Viewed = b;

  if(!c){
    Modules_Viewed = [...b, obj];
  }

  const newUser = {...user, Subscribed_Courses: user.Subscribed_Courses.map(i => {
    if(i.id !== a.id){
      return i;
    } else {
      return {...a, Modules_Viewed: Modules_Viewed};
    }
  })};
  
  return async function (dispatch) {

    if(!c){
      const res = await axios.put(`${db_url}/users/${user.id}`, {Subscribed_Courses: newUser.Subscribed_Courses});
      const data = await res.data;
    }

    return dispatch({
      type: ADD_COURSE_MODULE,
      data: newUser,
    });
  };
}

export function addViewedVideo(course, video, user, module) {
  const a = _.find(user.Subscribed_Courses, (o) => _.includes(o.course, course.id));
  const b = a.Modules_Viewed;

  const newModules = b.map(j => {
    if(j.playlist_id !== module.playlist_id){
      return j;
    } else {
      return {
        ...j, Viewed_Videos: [...j.Viewed_Videos, video]
      };
    }
  });

  const newUser = {...user, Subscribed_Courses: user.Subscribed_Courses.map(i => {
    if(i.id !== a.id){
      return i;
    } else {
      return {...a, Modules_Viewed: newModules};
    }
  })};

  return async function (dispatch) {


    const res = await axios.put(`${db_url}/users/${user.id}`, {Subscribed_Courses: newUser.Subscribed_Courses});
    const data = await res.data;


    return dispatch({
      type: ADD_VIEWED_VIDEO,
      data: newUser,
    });
  };
}

export function setCourseVideo(obj, user, check) {
  return async function (dispatch) {
    return dispatch({
      type: SET_COURSE_VIDEO,
      data: obj,
    });
  };
}