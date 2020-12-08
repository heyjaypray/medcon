import {
  GET_CONFERENCES,
  GET_COURSES,
  SELECT_VIDEO,
  SELECT_COURSE
} from './actions';
  
const initialState = {
  conferences: [],
  courses: [],
  courseVideo: null,
  course: null
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
    case SELECT_VIDEO:
      return {
        ...state,
        courseVideo: data
      };  
    case SELECT_COURSE:
      return {
        ...state,
        course: data
      };  
    default:
      return {
        ...state,
  
      };
  }
}
  