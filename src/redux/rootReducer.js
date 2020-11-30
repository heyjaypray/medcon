import { combineReducers } from 'redux';
import main from './main/reducer'
import users from './user/reducer'

const rootReducer = combineReducers({
    main,
    users
});

export default rootReducer;
