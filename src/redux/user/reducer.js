import {
    GET_USER,
    LOGIN_USER,
    LOGOUT
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
        default:
            return {
                ...state,

            };
    }
}
