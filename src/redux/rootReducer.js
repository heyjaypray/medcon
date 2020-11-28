import { combineReducers } from 'redux';
import conferencesReducer from './conferences/reducer'
import users from './user/reducer'

const rootReducer = combineReducers({
    conferencesReducer,
    users
});

export default rootReducer;
