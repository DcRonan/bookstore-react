import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>
      <button type="button" onClick={() => handleRemoveBook(book)}>
        Delete
      </button>
    </td>
  </>
);

export default Book;

Book.defaultProps = {
  book: {},
  handleRemoveBook: () => {},
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }),
  handleRemoveBook: PropTypes.func,
};
