// import './App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import NavBar from './Navbar';

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <NavBar />
        <BooksList />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;
