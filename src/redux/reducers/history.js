// const initialState = {
//   data: [],
// };

// const history = (state = initialState, action) => {
//   switch (action.type) {
//     case 'GET_HISTORY': {
//       return {
//         ...state,
//         data: action.payload,
//       };
//     }
//     case 'GET_HISTORY_FAILED': {
//       const historydata = [...state.history];
//       historydata.splice(action.payload, 1);
//       return {
//         ...state,
//         history,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

// export default history;
