import {http} from '../../helpers/http';

import {BACKEND_URL} from '@env';

export const getUser = token => {
  return async dispatch => {
    const {data} = await http(token).get(`${BACKEND_URL}/profile`);
    dispatch({
      type: 'USER_GET_DETAILS',
      payload: data.results,
    });
  };
};

export const updateUser = (token, Data) => async dispatch => {
  console.log(token);
  const form = new FormData();
  if (Data.picture !== null) {
    form.append('picture', {
      uri: Data.picture.uri,
      name: Data.picture.fileName,
      type: Data.picture.type,
    });
  }
  form.append('email', Data.email);
  form.append('number', Data.number);
  form.append('address', Data.address);
  form.append('name', Data.name);
  form.append('firstName', Data.firstName);
  form.append('lastName', Data.lastName);
  console.log(form);
  try {
    const {data} = await http(token).put(`${BACKEND_URL}/updateProfile`, form);
    dispatch({
      type: 'USER_UPDATE',
      payload: data.message,
    });
  } catch (err) {
    dispatch({
      type: 'USER_UPDATE_FAILED',
      payload: err.response.data.message,
    });
  }
};
