import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
const App = () => {
  let [movies, setMovies] = useState([]);

  // =================== Get movies =======================
  const getMovies = () =>{
    axios.
      get('')
      .then((res)=>{
        setMovies(res.data)
      })
  }
  useEffect(()=>{

  }, [])
  return (
    <div className="App">
    <h1>Movie API</h1>
    </div>
  );
}

export default App;
