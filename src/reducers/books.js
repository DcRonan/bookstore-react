const initialState = [
  {
    id: Math.ceil(Math.random() * 1000),
    title: 'Book 1',
    category: 'Action',
  },
  {
    id: Math.ceil(Math.random() * 1000),
    title: 'Book 2',
    category: 'Kids',
  },
  {
    id: Math.ceil(Math.random() * 1000),
    title: 'Book 3',
    category: 'Horror',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default bookReducer;
