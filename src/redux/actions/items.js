import http from '../../helpers/http';
import {BACKEND_URL} from '@env';

export const getItems = () => {
  return async dispatch => {
    try {
      const {data} = await http().get(`${BACKEND_URL}/items`);
      dispatch({
        type: 'ITEM_GET_LIST',
        payload: data.results,
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
