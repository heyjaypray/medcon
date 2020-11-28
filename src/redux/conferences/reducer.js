import {
  GET_CONFERENCES
  } from './actions';
  
  const initialState = {
    conferences: []
  };
  
  export default function (state = initialState, action) {
    const { type, data } = action;
    switch (type) {
      case GET_CONFERENCES:
        return {
          ...state,
          conferences: data
        };  
      default:
        return {
          ...state,
  
        };
    }
  }
  