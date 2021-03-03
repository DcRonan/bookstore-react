import PropTypes from 'prop-types';

const Book = props => {
  const { id, title, category } = props;

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

export default Book;

Book.PropTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
};
