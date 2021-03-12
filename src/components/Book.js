import PropTypes from 'prop-types';
import loader from '../assets/loader.png';

const Book = ({ book, handleRemoveBook }) => (
  <>
    <div
      className="d-flex flex-md-row flex-column mb-5"
      style={{
        background: 'var(--white)',
        padding: 30,
        boxShadow: '0px 0px 0px 1px #eeeeee',
      }}
    >
      <div className="d-flex flex-column col-md-5">
        <span
          style={{ fontSize: 14, color: 'var(--gray)', fontWeight: 'bold' }}
        >
          {book.category}
        </span>
        <span
          style={{
            fontFamily: '"Roboto Slab", serif',
            fontSize: 22,
            color: '#121212',
            fontWeight: 'bold',
          }}
        >
          {book.title}
        </span>
        <span
          style={{
            color: '#0290ff',
            fontSize: 14,
            fontFamily: '"Roboto Slab", serif',
          }}
        >
          J. K. Rowling
        </span>
        <ul className="list-inline mt-4">
          <li
            className="list-inline-item"
            style={{
              fontSize: 14,
              color: '#0290ff',
              fontFamily: '"Roboto Slab", serif',
              marginRight: 20,
            }}
          >
            <button
              className="btn btn-primary btn-sm"
              type="button"
              style={{
                background: 'transparent',
                color: '#0290ff',
                borderStyle: 'solid',
                borderColor: '#0290ff',
                width: 75,
                border: 'none',
              }}
            >
              Comments
            </button>
          </li>
          <li
            className="list-inline-item"
            style={{
              fontSize: 14,
              color: '#0290ff',
              fontFamily: '"Roboto Slab", serif',
              marginRight: 20,
              paddingLeft: 20,
              borderLeftStyle: 'solid',
              borderLeftColor: '#e8e8e8',
              borderRightStyle: 'solid',
              borderRightColor: '#e8e8e8',
            }}
          >
            <button
              type="button"
              onClick={() => handleRemoveBook(book)}
              className="btn btn-primary btn-sm"
              style={{
                background: 'transparent',
                color: '#0290ff',
                borderStyle: 'solid',
                borderColor: '#0290ff',
                width: 75,
                border: 'none',
              }}
            >
              Remove
            </button>
          </li>
          <li
            className="list-inline-item"
            style={{
              fontSize: 14,
              color: '#0290ff',
              fontFamily: '"Roboto Slab", serif',
              marginRight: 20,
            }}
          >
            <button
              className="btn btn-primary btn-sm"
              type="button"
              style={{
                background: 'transparent',
                color: '#0290ff',
                borderStyle: 'solid',
                borderColor: '#0290ff',
                width: 75,
                border: 'none',
              }}
            >
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-sm-center justify-content-lg-center align-items-lg-center col-md-3">
        <img src={loader} alt="" />
      </div>
      <div className="d-flex flex-column col-md-4 justify-content-center">
        <span style={{ fontSize: 13, color: 'var(--gray)' }}>
          CURRENT CHAPTER
        </span>
        <span style={{ fontFamily: '"Roboto Slab", serif' }}>
          Chapter 3: A Lesson Learned
        </span>
        <button
          className="btn btn-primary mt-4"
          type="button"
          style={{ background: '#0290ff', fontFamily: '"Roboto Slab", serif' }}
        >
          Update progress
        </button>
      </div>
    </div>
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
