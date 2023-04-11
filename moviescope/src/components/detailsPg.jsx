import React, {useState, useEffect} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"


const Showone = () => {
    let [movie, setmovie] = useState([])

    const params = useParams();
    const id = params.id
    // =============== get backend data =============== //
    const getMovie = () => {
        
        axios
            .get(`http://localhost:8000/movie/${id}`, movie)
            .then((res) => {
            setmovie(res.data)
            console.log(res.data)
        });
    };

useEffect(()=>{
    getMovie()
},[])

    return (
        <>
        <h1>{movie.title}</h1>
        <img src= {movie.poster}/>
        <p>{movie.duration} | {movie.type} | {movie.genre} | released: {movie.release_date}</p>
        <p>{movie.description}</p>
        </>
    );
}

export default Showone;