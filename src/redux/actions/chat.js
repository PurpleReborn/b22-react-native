import {http} from '../../helpers/http';
import {ToastAndroid} from 'react-native';

import {BACKEND_URL} from '@env';

export const chatList = token => {
  return async dispatch => {
    const {data} = await http(token).get(`${BACKEND_URL}/chat`);
    dispatch({
      type: 'CHAT_LIST',
      payload: data.results,
    });
    console.log(BACKEND_URL, 'FOR chat');
  };
};

export const chatAll = (token, number) => {
  return async dispatch => {
    try {
      const {data} = await http(token).get(
        `${BACKEND_URL}/chat/allChat?users=${number}`,
      );
      console.log(BACKEND_URL, 'FOR chat');
      dispatch({
        type: 'CHAT_LIST_ALL',
        payload: data.results,
      });
    } catch (err) {
      dispatch({
        type: 'CHAT_LIST_ALL_FAILED',
        payload: err.response.data.message,
      });
    }
  };
};

export const sendChat = (token, recipient, message) => {
  return async dispatch => {
    const form = new URLSearchParams();
    form.append('recipient', recipient);
    form.append('message', message);
    try {
      const {data} = await http(token).post(
        `${BACKEND_URL}/chat`,
        form.toString(),
      );
      dispatch({
        type: 'SEND_CHAT',
        payload: data.message,
      });
      console.log(BACKEND_URL, 'FOR chat');
    } catch (err) {
      dispatch({
        type: 'SEND_CHAT_FAILED',
        payload: err.response.data.message,
      });
      setTimeout(() => {
        dispatch({type: 'CHAT_RESET'});
      }, 3000);
    }
  };
};

export const searchUser = (token, column, search) => {
  return async dispatch => {
    try {
      const {data} = await http(token).get(
        `${BACKEND_URL}/chat/search?column=${column}&search=${search}`,
      );
      dispatch({
        type: 'USER_SEARCH',
        payload: data.results,
      });
    } catch (err) {
      dispatch({
        type: 'USER_SEARCH_FAILED',
        payload: err.response.data.message,
      });
      setTimeout(() => {
        dispatch({type: 'CHAT_RESET'});
      }, 4000);
    }
  };
};

export const deleteChat = (token, recipient, id) => {
  return async dispatch => {
    const form = new URLSearchParams();
    form.append('recipient', recipient);
    const {data} = await http(token).delete(`${BACKEND_URL}/chat/${id}`, {
      data: form,
    });
    const {data: data2} = await http(token).get(`${BACKEND_URL}/chat`);
    dispatch({
      type: 'CHAT_LIST',
      payload: data2.results,
    });

    const {data: data3} = await http(token).get(
      `${BACKEND_URL}/chat/allChat?users=${recipient}`,
    );
    dispatch({
      type: 'CHAT_LIST_ALL',
      payload: data3.results,
    });
  };
};

export const deleteChat2 = (token, id, recipient) => {
  return async dispatch => {
    const form = new URLSearchParams();
    form.append('recipient', recipient);
    const {data} = await http(token).delete(`${BACKEND_URL}/chat/${id}`, {
      data: form,
    });
    ToastAndroid.showWithGravity(
      'Delete Message Success',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
    dispatch(chatAll(token, recipient));
    dispatch(chatList(token));
  };
};

export const uploadFile = (token, recipient, images) => {
  return async dispatch => {
    console.log(images);
    const form = new FormData();
    form.append('recipient', recipient);
    if (images !== '') {
      form.append('images', {
        uri: images.uri,
        name: images.fileName,
        type: images.type,
      });
    }
    console.log(form, 'form');
    try {
      const {data} = await http(token).post(`${BACKEND_URL}/chat/upload`, form);
      dispatch({
        type: 'UPLOAD',
        payload: data.message,
      });
    } catch (err) {
      dispatch({
        type: 'UPLOAD_FAILED',
        payload: console.log('error'),
      });
    }
  };
};
