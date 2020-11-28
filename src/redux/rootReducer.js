import { combineReducers } from 'redux';
import events from './events/reducer'
import users from './user/reducer'

const rootReducer = combineReducers({
    events,
    users
});

export default rootReducer;
