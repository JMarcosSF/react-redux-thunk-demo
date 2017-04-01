/**
 * Created by jmarcos on 3/31/17.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function(state = initialState, action) {
    switch (action.type) {
        case types.ITEMS_FETCH_DATA_SUCCESS:
            console.log('in reducer');
            console.log(action.items.data);

            return { ...state, items: action.items.data };
        default:
            return state;
    }
}
