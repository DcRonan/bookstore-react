// import './App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Filter from './CategoryFilter';

function App() {
  return (
    <div className="App">
      <BooksForm />
      <BooksList />
      <Filter />
    </div>
  );
}

export default App;
