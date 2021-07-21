const initialState = {
  sccMsg: '',
  errMsg: '',
};

const transaction = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_TRANSACTION': {
      return {
        ...state,
        sccMsg: action.payload,
        errMsg: '',
      };
    }
    case 'CREATE_TRANSACTION_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
        sccMsg: '',
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
