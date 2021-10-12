const itemState = {
  data: [],
  details: {},
  search: [],
  errMsg: '',
  pageInfo: {},
};

const items = (state = itemState, action) => {
  switch (action.type) {
    case 'ITEM_GET_LIST': {
      return {
        ...state,
        data: [...state.data, ...action.payload.results],
        // search: action.payload.results,
        pageInfo: action.payload.pageInfo,
        errMsg: null,
      };
    }
    case 'ITEM_SEARCH': {
      return {
        ...state,
        search: action.payload.results,
        pageInfo: action.payload.pageInfo,
        errMsg: null,
      };
    }
    case 'ITEM_GET_LIST_FAILED': {
      return {
        ...state,
        data: action.payload.results,
        errMsg: action.payload,
      };
    }
    case 'ITEM_SEARCH_FAILED': {
      return {
        ...state,
        search: action.payload.results,
        errMsg: action.payload,
      };
    }
    case 'ITEM_GET_LIST_FAVORITE': {
      return {
        ...state,
        // search: [...state.search, ...action.payload.results],
        details: action.payload.results,
        pageInfo: action.payload.pageInfo,
        errMsg: null,
      };
    }
    case 'ITEM_GET_LIST_FAILED_FAVORITE': {
      return {
        ...state,
        details: action.payload.results,
        errMsg: action.payload,
      };
    }
    case 'ITEM_GET': {
      return {
        ...state,
        data: action.payload.results,
        pageInfo: action.payload.pageInfo,
        errMsg: null,
      };
    }
    case 'ITEMS_GET': {
      return {
        ...state,
        data: action.payload.items,
        pageInfo: action.payload.pageInfo,
      };
    }
    case 'ITEMS_GET_NEXT': {
      return {
        ...state,
        data: [...state.data, ...action.payload.items],
        pageInfo: action.payload.pageInfo,
        errMsg: null,
      };
    }
    case 'ITEM_GET_FAILED': {
      return {
        ...state,
        data: action.payload.results,
        errMsg: action.payload,
      };
    }
    case 'ITEM_GET_DETAILS': {
      return {
        ...state,
        details: action.payload,
      };
    }
    // case 'SEARCH': {
    //   return {
    //     ...state,
    //     search: action.payload.results,
    //     errMsg: '',
    //   };
    // }
    // case 'SEARCH_FAILED': {
    //   return {
    //     ...state,
    //     errMsg: action.payload,
    //   };
    // }
    // case 'GET_PRODUCT_SEARCH': {
    //   return {
    //     ...state,
    //     dataSearch: action.payload.results,
    //     pageInfo: action.payload.pageInfo,
    //     errMsg: '',
    //   };
    // }
    // case 'GET_PRODUCT_SEARCH_FAILED': {
    //   return {
    //     ...state,
    //     errMsg: action.payload,
    //     dataSearch: [],
    //     pageInfo: [],
    //   };
    // }
    default: {
      return state;
    }
  }
};

export default items;
