import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../reducers/books';

const BooksList = () => {
  const books = useSelector(state => state.books);
  return (
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
            <td>
              <Book id={book.id} />
            </td>
            <td>
              <Book title={book.title} />
            </td>
            <td>
              <Book category={book.category} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksList;
