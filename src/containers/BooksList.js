import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { REMOVE_BOOK } from '../actions/index';

const BooksList = () => {
  const books = useSelector(state => state);

  const dispatch = useDispatch();

  const deleteBook = book => {
    dispatch(REMOVE_BOOK(book));
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <Book book={book} />
              <td>
                <button type="button" onClick={() => deleteBook(book)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BooksList;
