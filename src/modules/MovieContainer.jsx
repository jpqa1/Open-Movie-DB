import Movie from './Movie';

const MovieContainer = (props) => {

    // define array of js objects
    const movies = props.movies;

    // define an empty array
    const moviesAsJSX = [];

    movies.forEach(movie => {
        const movieComponent = <Movie title={movie.Title} poster={movie.Poster} year={movie.Year} />;
        moviesAsJSX.push(movieComponent);
    })

    return (
        <>

            {moviesAsJSX}

        </>
    )
}

export default MovieContainer;
