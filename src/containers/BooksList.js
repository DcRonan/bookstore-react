import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { REMOVE_BOOK } from '../actions/index';

const BooksList = () => {
  const storedBooks = useSelector(({ books }) => books);

  const filter = useSelector(({ filter }) => filter);

  const books = () => {
    if (filter.filter === 'All') {
      return storedBooks;
    }
    return storedBooks.filter(book => book.category === filter.filter);
  };

  const dispatch = useDispatch();

  const handleRemoveBook = book => {
    dispatch(REMOVE_BOOK(book));
  };

  return (
    <>
      {books().map(book => (
        <div key={book.id}>
          <Book book={book} handleRemoveBook={handleRemoveBook} />
        </div>
      ))}
    </>
  );
};

export default BooksList;
