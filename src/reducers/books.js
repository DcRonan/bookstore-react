const initialState = [
  {
    id: Math.random(),
    title: 'Book 1',
    category: 'Category 1',
  },
  {
    id: Math.random(),
    title: 'Book 2',
    category: 'Category 2',
  },
  {
    id: Math.random(),
    title: 'Book 3',
    category: 'Category 3',
  },
];

const Book = props => {
  const book = {
    id: props.book.id,
    title: props.book.title,
    category: props.book.category,
  };

  return book;
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return state.filter(book => book !== action.payload);
    default:
      return state;
  }
};

export default Book;

export { bookReducer };
