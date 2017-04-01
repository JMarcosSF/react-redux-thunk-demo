import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import * as types from './actionTypes';
import axios from 'axios';

const URL = 'http://5826ed963900d612000138bd.mockapi.io/items';

export function itemsFetchDataSuccess(items) {
    return {
        type: types.ITEMS_FETCH_DATA_SUCCESS,
        items
    };
}

export function loadItems() {
    console.log('in loadItems()');

    return (dispatch) => {
        dispatch(beginAjaxCall());

        return axios.get(URL).then(resp => {
            console.log(resp);
            dispatch(itemsFetchDataSuccess(resp));
        }).catch(error => {
            console.log(error);
            dispatch(ajaxCallError());
        });
    };

}
