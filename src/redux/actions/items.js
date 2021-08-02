import http from '../../helpers/http';
import {BACKEND_URL} from '@env';

export const getItems = search => {
  return async dispatch => {
    try {
      const {data} = await http().get(`${BACKEND_URL}/items?search=${search}`);
      dispatch({
        type: 'ITEM_GET_LIST',
        payload: data,
      });
    } catch (e) {
      console.log('error');
    }
  };
};

export const getDetails = id => {
  return async dispatch => {
    try {
      const {data} = await http().get(`${BACKEND_URL}/items/${id}`);
      dispatch({
        type: 'ITEM_GET_DETAILS',
        payload: data.results,
      });
    } catch (err) {
      console.log('Get detail failed' + err);
      throw err;
    }
  };
};
