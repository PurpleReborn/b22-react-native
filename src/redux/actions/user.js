import {http} from '../../helpers/http';

import {BACKEND_URL} from '@env';

export const getUser = token => {
  return async dispatch => {
    const {data} = await http(token).get(`${BACKEND_URL}/profile`);
    console.log(`${BACKEND_URL}/profile`);
    dispatch({
      type: 'USER_GET_DETAILS',
      payload: data.results,
    });
  };
};

export const updateUser = (Data, token) => async dispatch => {
  const form = new FormData();
  if (Data.picture !== '') {
    form.append('picture', {
      uri: Data.picture.uri,
      name: Data.picture.fileName,
      type: Data.picture.type,
    });
  }
  form.append('name', Data.name);
  form.append('address', Data.address);
  form.append('email', Data.email);
  form.append('number', Data.number);
  form.append('firstName', Data.firstName);
  form.append('lastName', Data.lastName);
  console.log(form);
  console.log(token, 'ini token update');
  try {
    const {data} = await http(token).patch(
      `${BACKEND_URL}/updateProfile`,
      form,
    );
    dispatch({
      type: 'USER_UPDATE_SUCCESS',
      payload: data.message,
    });
    // navigation.navigate('profile');
  } catch (err) {
    dispatch({
      type: 'USER_UPDATE_FAILED',
      payload: 'Success',
    });
    // navigation.navigate('profile');
    // navigation.reset({index: 0, routes: [{name: 'profile'}]});
  }
};
