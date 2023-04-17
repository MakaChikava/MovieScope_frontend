import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/navbar';

import './App.css';
const App = () => {
  let emptyMovie={title:'', overview:'', poster:''}
  let [movies, setMovies] = useState([]);
  let [search, setSearch] = useState('');
  // =================== Get movies =======================
  
  const getMovies = () =>{
    const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;
    axios.
      get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`, emptyMovie)
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
      <Navbar/>
            <div className="my-9 flex items-center justify-center ">
                <input type="text" placeholder="Search keywords" id='searchbar' value={search}
					onChange={(e) => setSearch(e.target.value)}/>
                <button className='bg-[#1543E4] text-white rounded-lg h-12 w-28 mx-2' onClick={getMovies}>Search</button>
            </div>
      <div className='flex w-auto flex-row flex-wrap justify-center'>
    {movies.map((movie)=>{
      return(
        <>
{/* movie */}
        
          {/* content */}
            <div className='flex flex-col m-3'>
              <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} className='flex h-96 w-72'/>
              <h1 className='flex text-white'>{movie.title}</h1>
              <h1 className='flex text-white'>{movie.name}</h1>
            </div>

        
        </>
      )
    })}
      </div>
    </div>
  );
}

export default App;
