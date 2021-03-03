import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CREATE_BOOK } from '../actions/index';

const BooksForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  const dispatch = useDispatch();

  const [book, setBook] = useState({ title: '', category: '' });

  const handleChange = e => {
    const copyBook = { ...book };
    copyBook[e.target.name] = e.target.value;
    setBook(copyBook);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const copyBook = { ...book };
    copyBook.id = Math.random();
    dispatch(CREATE_BOOK(copyBook));
  };

  return (
    <>
      <div>BooksForm</div>

      <form action="POST" onSubmit={handleSubmit}>
        <input type="text" name="title" id="title" onChange={handleChange} value={book.title} />
        <select onChange={handleChange} name="category">
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default BooksForm;
