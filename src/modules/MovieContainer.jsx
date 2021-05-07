import Movie from './Movie';

const MovieContainer = ({ movies }) => {

    // define an empty array
    const moviesAsJSX = movies.map(movie => <Movie title={movie.Title} poster={movie.Poster} year={movie.Year} />);

    return (
        <>

            {moviesAsJSX}

        </>
    )
}

export default MovieContainer;
