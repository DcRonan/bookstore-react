import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CREATE_BOOK } from '../actions/index';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BooksForm = () => {
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
    if (book.category === '') {
      copyBook.category = 'Action';
    }
    copyBook.id = Math.ceil(Math.random() * 1000);
    dispatch(CREATE_BOOK(copyBook));
    setBook({ title: '', category: '' });
  };

  return (
    <>
      <div>BooksForm</div>

      <form action="POST" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          value={book.title}
        />
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

export { categories };
