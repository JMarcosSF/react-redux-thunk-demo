import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import ajaxStatusReducer from './ajaxStatusReducer';

const rootReducer = combineReducers({
    itemsReducer,
    ajaxStatusReducer
});

export default rootReducer;
