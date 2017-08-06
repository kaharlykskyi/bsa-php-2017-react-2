import { combineReducers } from 'redux';
import users from './users';
import filter from './filter';

export default combineReducers({
    users,
    filter
});