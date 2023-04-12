import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
const App = () => {
  let [movies, setMovies] = useState([]);

  // =================== Get movies =======================
  const getMovies = () =>{
    const KEY = process.env.REACT_APP_API_KEY;
    axios.
      get(`https://api.themoviedb.org/3/search/multi?api_key=${KEY}&language=en-US&query=spiderman&page=1&include_adult=false`)
      .then((res)=>{
        setMovies(res.data)
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
        <img src={movie.poster_path}/>
        </>
      )
    })}
    </div>
  );
}

export default App;
