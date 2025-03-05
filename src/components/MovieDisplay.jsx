function MovieDisplay({movie}){
    const loaded = () => {
         return (
            <>
            <h2>{movie.Title}</h2>
            <h3>{movie.Genre}</h3>
            <img src={movie.Poster} alt ={movie.Title}/>
            <h4>{movie.Year}</h4>
            </>
        );
    };

    const loading = () => {
        return <h2>Loading....</h2>
    }

    return movie ? loaded() : loading();
}

export default MovieDisplay;