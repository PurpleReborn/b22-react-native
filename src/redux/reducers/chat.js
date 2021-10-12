const initialState = {
  data: [],
  allData: [],
  userData: [],
  sccMsg: '',
  errMsg: '',
};

const chat = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_SEARCH': {
      return {
        ...state,
        userData: action.payload,
      };
    }
    case 'USER_SEARCH_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    case 'CHAT_LIST': {
      return {
        ...state,
        data: action.payload,
      };
    }
    case 'CHAT_LIST_ALL': {
      return {
        ...state,
        allData: action.payload,
      };
    }
    case 'CHAT_LIST_ALL_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    case 'SEND_CHAT': {
      return {
        ...state,
        sccMsg: action.payload,
        errMsg: '',
      };
    }
    case 'SEND_CHAT_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
        sccMsg: '',
      };
    }
    case 'UPLOAD': {
      return {
        ...state,
        sccMsg: action.payload,
        errMsg: '',
      };
    }
    case 'UPLOAD_FAILED': {
      return {
        ...state,
        sccMsg: '',
        errMsg: action.payload,
      };
    }
    case 'CHAT_RESET': {
      return {
        ...state,
        sccMsg: '',
        errMsg: '',
        userData: [],
      };
    }
    case 'DELETE_CHAT': {
      return {
        ...state,
        allData: [],
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default chat;
