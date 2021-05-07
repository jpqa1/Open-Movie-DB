const Movie = (props) => {

    const title = props.title;
    const poster = props.poster;
    const year = props.year;

    return (
        <>
            <h1>{title}</h1>
            <img src={poster} />
            <p>{year}</p>
        </>
    )

}

export default Movie;