import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions/index';
import Filter from '../components/CategoryFilter';

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

  const handleFilterChange = category => {
    dispatch(CHANGE_FILTER(category));
  };

  return (
    <>
      <Filter handleFilterChange={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {books().map(book => (
            <tr key={book.id}>
              <Book book={book} handleRemoveBook={handleRemoveBook} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BooksList;
