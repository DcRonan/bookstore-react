import PropTypes from 'prop-types';
import { categories } from '../containers/BooksForm';

const CategoryFilter = props => {
  const handleChange = e => (
    e.target.value === 'All' ? props.handleFilterChange('All') : props.handleFilterChange(e.target.value)
  );

  return (
    <>
      <div className="mb-4">
        <span className="ml-4" style={{ color: 'var(--gray)' }}>FILTER BY CATEGORY :</span>
        <select name="categories" onChange={handleChange} className="ml-2" style={{ height: 45, color: 'var(--gray)', border: '1px solid #e8e8e8' }}>
          <option value="All">All</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
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
