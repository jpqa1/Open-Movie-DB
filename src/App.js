import { useState } from 'react';
import './App.css';
import axios from 'axios';
import MovieContainer from './modules/MovieContainer'
import SearchBar from './modules/SearchBar';
import { apiKey } from './constants.json';


function App() {

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const searchFilms = () => {
    axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`)
      .then(({ data }) => setMovies(data.Search))
      .catch(err => console.log(err));
  }

  return (
    <div className="App">

      <>
        <SearchBar search={search} setSearch={setSearch} searchFilms={searchFilms} />
        <MovieContainer movies={movies} />
      </>

    </div>



  );
}

export default App;
