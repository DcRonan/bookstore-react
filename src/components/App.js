// import './App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BooksForm />
      <BooksList />
    </div>
  );
}

export default App;
