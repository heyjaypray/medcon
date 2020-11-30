import {
  GET_CONFERENCES,
  GET_COURSES
  } from './actions';
  
  const initialState = {
    conferences: [],
    courses: []
  };
  
  export default function (state = initialState, action) {
    const { type, data } = action;
    switch (type) {
      case GET_CONFERENCES:
        return {
          ...state,
          conferences: data
        };  
        case GET_COURSES:
          return {
            ...state,
            courses: data
          };  
      default:
        return {
          ...state,
  
        };
    }
  }
  