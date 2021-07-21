export const addItems = data => ({
  type: 'CART_ADD_ITEM',
  payload: data,
});

export const deleteItem = payload => ({
  type: 'CART_DELETE_ITEM',
  payload,
});

export const deleteAllItems = () => ({
  type: 'CARTS_DELETE_ALL_ITEMS',
  payload: [],
});
