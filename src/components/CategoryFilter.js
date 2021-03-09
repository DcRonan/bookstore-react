import { categories } from '../containers/BooksForm';

const CategoryFilter = () => (
  <>
    <span> Filter: </span>
    <select name="categories">
      <option value="All">All</option>
      {categories.map(cat => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  </>
);

export default CategoryFilter;
