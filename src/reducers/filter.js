const filterState = {
  filter: '',
};

const filterBookReducer = (state = filterState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default filterBookReducer;
