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

export const updateProfile = (
  {userName, email, number, first_name, last_name, address},
  token,
) => {
  // console.log(data);
  return async dispatch => {
    const form = new FormData();
    form.append('userName', userName);
    form.append('email', email);
    form.append('number', number);
    form.append('firstName', first_name);
    form.append('lastName', last_name);
    form.append('address', address);
    // // form.append('picture', picture);
    // form.append('picture', {
    //   uri: picture,
    //   name: 'test.jpg',
    //   type: 'image/jpeg',
    // });

    // console.log(form);

    try {
      const {data} = await http(token).put(`${BACKEND_URL}/profile`, form);
      dispatch({
        type: 'PROFILE_UPDATE',
        payload: data.results,
      });
    } catch (err) {
      dispatch({
        type: 'PROFILE_UPDATE_FAILED',
        payload: err.response.data.message,
      });
      setTimeout(() => {
        dispatch({type: 'PROFILE_RESET'});
      }, 3000);
    }
  };
};
