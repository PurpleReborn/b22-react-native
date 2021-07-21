import {combineReducers} from 'redux';
import cart from './cart';
import history from './history';
import items from './items';
import auth from './auth';
import user from './user';
import transaction from './payment';

const rootReducer = combineReducers({
  auth,
  user,
  items,
  cart,
  history,
  transaction,
});

export default rootReducer;
