// import './App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <BooksList />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;
