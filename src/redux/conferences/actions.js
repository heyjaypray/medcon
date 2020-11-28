  import db_url from '../db_url'
  import axios from 'axios'
  // import Cookies from 'js-cookie';


  export const GET_CONFERENCES = 'GET_CONFERENCES'

  export function getConferences(cookie) {
    return async function (dispatch) {
      const res = await axios.get(`${db_url}/conferences/`);
  
      const data = await res.data;
      return dispatch({
        type: GET_CONFERENCES,
        data: data,
      });
    };
  }