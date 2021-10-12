import http from '../../helpers/http';
import {BACKEND_URL} from '@env';

export const getItems = page => {
  return async dispatch => {
    try {
      const {data} = await http().get(
        `${BACKEND_URL}/items?page=${page}&limit=3`,
      );
      console.log(BACKEND_URL);
      dispatch({
        type: 'ITEM_GET_LIST',
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: 'ITEM_SEARCH_FAILED',
        payload: err.response.data.message,
      });
    }
  };
};

export const searchItems = (search, page, sort) => {
  return async dispatch => {
    try {
      const {data} = await http().get(
        `${BACKEND_URL}/items?search=${search}&page=${page}&limit=30&sort[${sort}]`,
      );
      dispatch({
        type: 'ITEM_SEARCH',
        payload: data,
      });
      console.log(search);
    } catch (err) {
      dispatch({
        type: 'ITEM_SEARCH_FAILED',
        payload: err.response.data.message,
      });
      console.log(search);
    }
  };
};

export const getItems3 = () => {
  return async dispatch => {
    try {
      const {data} = await http().get(`${BACKEND_URL}/items?limit=10`);
      dispatch({
        type: 'ITEM_GET_LIST_FAVORITE',
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: 'ITEM_GET_LIST_FAILED_FAVORITE',
        payload: err.response.data.message,
      });
    }
  };
};

export const getItems2 = url => {
  if (!url) {
    return async dispatch => {
      const {data} = await http().get(`${BACKEND_URL}/items`);
      dispatch({
        type: 'ITEMS_GET',
        payload: {
          items: data.results,
          pageInfo: data.pageInfo,
        },
      });
    };
  } else {
    return async dispatch => {
      const {data} = await http().get(url);
      dispatch({
        type: 'ITEMS_GET_NEXT',
        payload: {
          items: data.results,
          pageInfo: data.pageInfo,
        },
      });
    };
  }
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
