const Movie = ({title, poster, year}) => {

    return (
        <>
            <h1>{title}</h1>
            <img src={poster} />
            <p>{year}</p>
        </>
    )

}

export default Movie;