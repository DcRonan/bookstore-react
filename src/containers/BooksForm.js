import React from 'react';

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

  return (
    <>
      <div>BooksForm</div>

      <form action="POST">
        <input type="text" name="title" id="title" />
        <select>
          {categories.map(cat => (
            <option key={cat} value="categories">
              {cat}
            </option>
          ))}
        </select>
      </form>
    </>
  );
};

export default BooksForm;
