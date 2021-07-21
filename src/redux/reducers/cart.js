const initialState = {
  items: [],
  totalItem: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case 'CART_DELETE_ITEM': {
      const items = [...state.items];
      items.splice(action.payload, 1);
      return {
        ...state,
        items,
      };
    }
    default: {
      return state;
    }
  }
};

export default cart;
