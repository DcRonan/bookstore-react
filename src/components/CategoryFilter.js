import PropTypes from 'prop-types';
import { categories } from '../containers/BooksForm';

const CategoryFilter = props => {
  const handleChange = e => (
    e.target.value === 'All' ? props.handleFilterChange('All') : props.handleFilterChange(e.target.value)
  );

  return (
    <>
      <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
        <div className="container">
          <a
            className="navbar-brand text-primary font-weight-bold"
            href="body"
            style={{ fontSize: 'x-large' }}
          >
            Bookstore CMS
          </a>
          <div className="pl-4">BOOKS</div>
          <select name="categories" onChange={handleChange} className="ml-2 border-0 ml-4" style={{ height: 45, color: 'var(--gray)', border: '1px solid #e8e8e8' }}>
            <option value="All">All</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <button
            data-toggle="collapse"
            className="navbar-toggler"
            data-target="#navcol-1"
            type="button"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav mr-auto">
              <li className="nav-item" />
            </ul>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#0290ff"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};

export default CategoryFilter;

CategoryFilter.defaultProps = {
  handleFilterChange: () => {},
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func,
};
