// import React from 'react';

const Book = props => {
  const book = {
    id: props.book.id,
    title: props.book.title,
    category: props.book.category,
  };

  return book;
};

export default Book;
