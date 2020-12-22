import {
  GET_USER,
  LOGIN_USER,
  LOGOUT,
  ADD_COURSE_TO_USER,
  INIT_MODULES,
  SELECT_COURSE,
  SET_COURSE_VIDEO,
  ADD_COURSE_MODULE,
  ADD_VIEWED_VIDEO
} from './actions';

const initialState = {
  user: null,
  loggedIn: false,
  course_video: null,
  course: null
};

export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case LOGIN_USER: 
      return {
        ...state,
        user: data,
        loggedIn: true
      };
    case GET_USER:
      return {
        ...state,
        user: data,
        loggedIn: true
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        loggedIn: false
      };
    case ADD_COURSE_TO_USER:
      return {
        ...state,
        user: { ...state.user, Subscribed_Courses: data.Subscribed_Courses },
      };
    case SELECT_COURSE:
      return {
        ...state,
        course: data,
      };
    case INIT_MODULES:
      return {
        ...state
      };
    case ADD_COURSE_MODULE:
      return {
        ...state,
        user: { ...state.user, Subscribed_Courses: data.Subscribed_Courses },
      };
    case ADD_VIEWED_VIDEO:
      return {
        ...state,
        user: { ...state.user, Subscribed_Courses: data.Subscribed_Courses },
      };
    case SET_COURSE_VIDEO:
      return {
        ...state,
        course_video: data
      };
    default:
      return {
        ...state
      };
  }
}
