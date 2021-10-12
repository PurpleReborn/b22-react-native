import http from '../../helpers/http';
import {BACKEND_URL} from '@env';

export const getHistory = token => {
  return async dispatch => {
    try {
      const {data} = await http(token).get(`${BACKEND_URL}/historyTrx`);
      console.log(`${BACKEND_URL}/historyTrx`);
      dispatch({
        type: 'GET_HISTORY',
        payload: data.results,
      });
      console.log(data);
    } catch (err) {
      dispatch({
        type: 'HISTORY_GET_FAILED',
        payload: err.response.data.message,
      });
    }
  };
};

export const deleteTransaction = (token, id) => {
  console.log(token, id);
  return async dispatch => {
    try {
      const {data} = await http(token).delete(
        `${BACKEND_URL}/deleteTrxId/${id}`,
      );
      console.log('test');
      dispatch({
        type: 'DELETE_TRX',
        payload: data.message,
      });
    } catch (err) {
      dispatch({
        type: 'DELETE_TRX_FAILED',
        payload: err.response.data.message,
      });
    }
  };
};

export const createTransaction =
  (item_id, item_amount, item_additional_price, payment_method, token) =>
  async dispatch => {
    console.log(item_id);
    const form = new URLSearchParams();
    item_id.map(value => form.append('item_id', value));
    form.append('item_additional_price', item_additional_price);
    form.append('payment_method', payment_method);
    form.append('item_amount', item_amount);
    // item_amount.map((value) => form.append('item_amount', value));
    console.log(form);
    try {
      const {data} = await http(token).post(
        `${BACKEND_URL}/transactions`,
        form.toString(),
      );
      dispatch({
        type: 'CREATE_TRANSACTION',
        payload: data.message,
      });
    } catch (err) {
      dispatch({
        type: 'CREATE_TRANSACTION_FAILED',
        payload: err.response.data.message,
      });
    }
  };
