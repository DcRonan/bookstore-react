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
      <div style={{ padding: 30 }}>
        <h1 style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--gray)' }}>ADD NEW BOOK</h1>

        <form action="POST" onSubmit={handleSubmit} className="d-md-flex d-lg-flex justify-content-between align-items-lg-center mt-3">
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            value={book.title}
            className="col-lg-6"
            placeholder="Book title"
            style={{ height: 45, border: '1px solid #e8e8e8' }}
          />
          <select onChange={handleChange} name="category" className="col-lg-3" style={{ height: 45, color: 'var(--gray)', border: '1px solid #e8e8e8' }}>
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <button type="submit" className="btn btn-primary col-lg-2" style={{ height: 45, background: '#0290ff', fontSize: 13 }}>Submit</button>
        </form>
      </div>

    </>
  );
};

export default BooksForm;

export { categories };
