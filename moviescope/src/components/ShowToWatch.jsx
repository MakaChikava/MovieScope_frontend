import React, {useState, useEffect} from "react";
import axios from "axios";
const MyMovies = () => {
    let [backend, setBackend] = useState([])

    // =============== get backend data =============== //
    const getData = () =>{
        axios.
            get('http://localhost:8000/movies')
            .then((res)=>{
                setBackend(res.data)
                console.log(res.data)
            })
    }

    useEffect(()=>{
        getData()
    }, [])


    return (
        <>
        <h1>My Movies</h1>
        <div className="MyMovies">
            {backend.map((movie)=>{
                return(
                    <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <img src={movie.poster} alt="" />
                    <p>{movie.duration} | {movie.type} | {movie.genre} | released: {movie.release_date}</p>
                    <p>{movie.description}</p>
                    
                    </div>
                )
            })}
        </div>
        </>
    );
}

export default MyMovies;