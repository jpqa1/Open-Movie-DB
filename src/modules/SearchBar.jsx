const SearchBar = ({search, setSearch, searchFilms}) => {


    return (
        <>
            <label>Movie Name:</label>
            <input value={search} onInput={event => setSearch(event.target.value)} />
            <button onClick={searchFilms}>search</button>
        </>
    )

}

export default SearchBar;