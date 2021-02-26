const Book = props => {
  const book = {
    id: props.book.id,
    title: props.book.title,
    category: props.book.category,
  };

  return book;
};

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return state.filter(book => book !== action.payload);
    default:
      return state;
  }
};

export { Book, bookReducer };
