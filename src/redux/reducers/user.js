const initialState = {
  details: {},
  msg: '',
  errMsg: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_GET_DETAILS': {
      return {
        ...state,
        details: action.payload,
      };
    }
    case 'USER_UPDATE_SUCCESS': {
      return {
        ...state,
        msg: action.payload,
      };
    }
    case 'USER_UPDATE_FAILED': {
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

export default user;
