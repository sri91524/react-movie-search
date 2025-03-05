import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import MovieDisplay from './components/MovieDisplay'

function App() {
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const [movie, setMovie] = useState(null);
  const movieList =[
    "the+lion+king",
    "bumble+bee",
    "harry+potter",
    "avenger",
    "inside+out",
    "minions",
    "3+idiots",
    "RRR",
    "billa",
    "ponniyin+selvan"];
      
  const getMovie = async (searchterm) => {

    try{

      let url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchterm}`;

      //Implemented Solution 2 - To generate movie using movieid
      // const idxEffect = searchterm.indexOf("effect-");
      // if(idxEffect >=0 )
      // {
      //   const idxMovieId = searchterm.indexOf("-");
      //   console.log(idxMovieId);
      //   console.log(searchterm);
      //   let id = searchterm.slice(idxMovieId+1); 

      //   url = `https://www.omdbapi.com/?apikey=${apiKey}&i=tt${id}`;
      //   console.log(url); 
      // }
          
      const response = await fetch(url);      
      // Parse the response as JSON
      const data = await response.json();  // Use .json() to parse the response      
      console.log(data);
      setMovie(data);
    }catch(e){
      console.error(e);
    }   
  };

  useEffect(() => {
    //Implemented Solution 2 - To generate movie using movieid
    // let movieId = Math.floor(Math.random() * (1300500 - 1300000 + 1)) + 1300000;
    // getMovie(`effect-${movieId}`);

    let randomArray = Math.floor(Math.random()* movieList.length);
    console.log(movieList[randomArray]);
    getMovie(`${movieList[randomArray]}`);
  },[])
  
  return (
    <div className='content'>
      <h1 className='heading'>Movie Search</h1>
      <Form moviesearch ={getMovie}/>
      <MovieDisplay movie = {movie}/>      
    </div>
  );
}

export default App;
