import { useState } from 'react';
import './App.css';
import axios from 'axios';
import MovieContainer from './modules/MovieContainer'


function App() {

  const [search, setsearch] = useState("");
  const [movies, setMovies] = useState([]);

  const searchFilms = () => {
    axios.get("http://www.omdbapi.com/?apikey=335035be&s=" + search)
      .then(res => setMovies(res.data.Search))
      .catch(err => console.log(err));
  }

  return (
    <div className="App">

      <label>Search bar of Westeros!</label>
      <input value={search} onInput={event => setsearch(event.target.value)} />
      <button onClick={searchFilms}>search</button>

    <>
    <MovieContainer movies={movies} />
    </>
      
    </div>
    


  );
}

export default App;
