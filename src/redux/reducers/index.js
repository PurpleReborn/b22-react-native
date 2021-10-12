import {combineReducers} from 'redux';
import cart from './cart';
import history from './history';
import items from './items';
import auth from './auth';
import user from './user';
import transaction from './payment';
import chat from './chat';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const persistAuth = {
  key: 'auth',
  storage: AsyncStorage,
};

// const persistUser = {
//   key: 'user',
//   storage: AsyncStorage,
// };

const rootReducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  user,
  items,
  cart,
  history,
  transaction,
  chat,
});

export default rootReducer;
