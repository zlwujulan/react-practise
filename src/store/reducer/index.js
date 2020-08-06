import {combineReducers} from 'redux';
import custom from './custom';
import dolist from './dolist'
let reducer = combineReducers({
    custom,
    dolist
});
export default reducer;