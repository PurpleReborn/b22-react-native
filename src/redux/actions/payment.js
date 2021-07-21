import http from '../../helpers/http';
import {BACKEND_URL} from '@env';

export const createTransaction = (data, token, payment_method) => {
  return async dispatch => {
    const form = new URLSearchParams();
    data.forEach(item => {
      form.append('item_id', item.id);
      form.append('item_amount', item.amount);
    });
    form.append('payment_method', payment_method);
    try {
      const {data: axios} = await http(token).post(
        `${BACKEND_URL}/transactions`,
        form.toString(),
      );
      dispatch({
        type: 'CREATE_TRANSACTION',
        payload: axios.message,
      });
    } catch (err) {
      dispatch({
        type: 'CREATE_TRANSACTION_FAILED',
        payload: err.response.data.message,
      });
    }
  };
};
