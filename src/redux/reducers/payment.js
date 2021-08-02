const initialState = {
  data: [],
  errMsg: '',
  msg: '',
  // pageInfo:[]
};

const transaction = (state = initialState, action) => {
  switch (action.type) {
    case 'HISTORY_GET': {
      return {
        ...state,
        data: action.payload,
        // pageInfo:action.payload.pageInfo
      };
    }
    case 'HISTORY_GET_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    case 'CREATE_TRANSACTION': {
      return {
        ...state,
        msg: action.payload,
      };
    }
    case 'CREATE_TRANSACTION_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default transaction;
