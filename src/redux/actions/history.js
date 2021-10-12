import {http} from '../../helpers/http';

import {BACKEND_URL} from '@env';

export const getHistory = token => {
  return async dispatch => {
    try {
      const {data} = await http(token).get(`${BACKEND_URL}/history`);
      console.log(`${BACKEND_URL}/history`);
      dispatch({
        type: 'GET_HISTORY',
        payload: data.results,
      });
    } catch (err) {
      dispatch({
        type: 'GET_HISTORY_FAILED',
        payload: err.response.data.message,
      });
    }
  };
};

export const deleteHistory = payload => ({
  type: 'HISTORY_DELETE_ITEM',
  payload,
});
