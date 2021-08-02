const itemState = {
  data: [],
  details: {},
  search: [],
  errMsg: '',
};

const items = (state = itemState, action) => {
  switch (action.type) {
    case 'ITEM_GET_LIST': {
      return {
        ...state,
        search: action.payload.results,
      };
    }
    case 'ITEM_GET_DETAILS': {
      return {
        ...state,
        details: action.payload,
      };
    }
    case 'SEARCH': {
      return {
        ...state,
        search: action.payload.results,
        errMsg: '',
      };
    }
    case 'SEARCH_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default items;
