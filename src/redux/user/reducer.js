import {
  GET_USER,
  LOGIN_USER,
  LOGOUT,
  ADD_COURSE_TO_USER
} from './actions';

const initialState = {
  user: null,
  loggedIn: false
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
        user: {...state.user, Subscribed_Courses: data.Subscribed_Courses},
      };
    default:
      return {
        ...state,

      };
  }
}
