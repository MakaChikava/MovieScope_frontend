import React, {useState, useEffect} from "react"
import axios from "axios"
import { redirect, useParams } from "react-router-dom"


const Showone = () => {
    let [movie, setmovie] = useState([])

    const params = useParams();
    const id = params.id
    // =============== GET MOVIE DATA =============== //
    const getMovie = () => {
        
        axios
            .get(`http://localhost:8000/movie/${id}`, movie)
            .then((res) => {
            setmovie(res.data)
            console.log(res.data)
        });
    };

    // ====================== UPDATE ================ //

    // ====================== DELETE ================ //
    const handleDelete = () =>{
        console.log(id)
        axios
            .delete(`http://localhost:8000/movie/${id}`)
            .then((res)=>{
                return redirect('http://localhost:8000/mylist')
            })
    }


useEffect(()=>{
    getMovie()
},[])

    return (
        <>
        <h1>{movie.title}</h1>
        <img src= {movie.poster}/>
        <p>{movie.duration} | {movie.type} | {movie.genre} | {movie.release_date}</p>
        <p>{movie.description}</p>
        <details>
            <summary>Edit</summary>
        <form>
        <label htmlFor="name">title: </label>
            <input type="text" name='title'/>
            <label htmlFor="name">Description: </label>
            <input type="text" name='Description'/>
            <label htmlFor="name">poster: </label>
            <input type="text" name='poster'/>
            <label htmlFor="name">genre: </label>
            <input type="text" name='genre'/>
            <label htmlFor="name">type: </label>
            <input type="text" name='type'/>
            <label htmlFor="name">duration: </label>
            <input type="text" name='duration'/>
            <label htmlFor="name">release_date: </label>
            <input type="text" name='release_date'/>
            <input type="submit" />
        </form>
        </details>
        
        <button onClick={handleDelete} value={movie.id}>Remove</button>
        </>
    );
}

export default Showone;