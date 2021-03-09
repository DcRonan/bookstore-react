import PropTypes from 'prop-types';
import { categories } from '../containers/BooksForm';

const CategoryFilter = props => {
  const handleChange = e => (
    e.target.value === 'All' ? props.handleFilterChange('') : props.handleFilterChange(e.target.value)
  );

  return (
    <>
      <span> Filter: </span>
      <select name="categories" onChange={handleChange}>
        <option value="All">All</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
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
