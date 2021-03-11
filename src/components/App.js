// import './App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5">
        <BooksList />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;
