import {
    GET_EVENTS
  } from './actions';
  
  const initialState = {
    events_list: []
  };
  
  export default function (state = initialState, action) {
    const { type, data } = action;
    switch (type) {
      case GET_EVENTS:
        return {
          ...state,
          events_list: data
        };  
      default:
        return {
          ...state,
  
        };
    }
  }
  