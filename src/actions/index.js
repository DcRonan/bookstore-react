const CREATE_BOOK = book => ({
  type: 'CREATE_BOOK',
  payload: book,
});

const REMOVE_BOOK = book => ({
  type: 'REMOVE_BOOK',
  payload: book,
});

const CHANGE_FILTER = category => ({
  type: 'CHANGE_FILTER',
  payload: category,
});

export { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER };
