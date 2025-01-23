
import './App.css'
import Header from './components/Header'
import MovieList from './components/MovieList';
import Footer from './components/Footer';

function App() {
  
  return (
    <div>
      <Header title="Anne-Liis filmlista!"/>{/* Skickar titeln som en prop */}
      <MovieList />
      <Footer/>
    </div>
  )
}

export default App
