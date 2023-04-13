import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
const App = () => {
  let [movies, setMovies] = useState({});

  // =================== Get movies =======================
  const getMovies = () =>{
    // KEY = process.env.REACT_APP_API_KEY;
    axios.
      get(`https://api.themoviedb.org/3/search/multi?api_key=2e43ac85ef27e0ebce60d4b75ba277f9&language=en-US&query=interstellar&page=1&include_adult=false`, movies)
      .then((res)=>{
        setMovies(res.data.results)
        console.log(res.data.results)
      })
  }
  useEffect(()=>{
    getMovies()
  }, [])
  return (
    <div className="App">
    <h1>Movie API</h1>

    {movies.map((movie)=>{
      return(
        <>
        <h1>{movie.title}</h1>
        <h1>{movie.name}</h1>
        <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}/>
        </>
      )
    })}
    </div>
  );
}

export default App;
