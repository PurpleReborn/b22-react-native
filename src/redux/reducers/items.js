const itemState = {
  data: [],
  details: {},
};

const items = (state = itemState, action) => {
  switch (action.type) {
    case 'ITEM_GET_LIST': {
      return {
        ...state,
        data: action.payload,
      };
    }
    case 'ITEM_GET_DETAILS': {
      return {
        ...state,
        details: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default items;
