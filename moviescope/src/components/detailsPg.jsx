import React, {useState, useEffect} from "react"
import axios from "axios"
import { redirect, useParams } from "react-router-dom"


const Showone = () => {
    let [movie, setmovie] = useState([])
    let [update, setUpdate] = useState({title:'', description:'', poster:'', genre:'', type:'', duration:'', release_date:''})

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
const handleupdate = (e) =>{
setUpdate({...update,
[e.target.name] : e.target.value})
console.log(e.target.value)
}
const handleSubmit = (e) =>{
e.preventDefault();
axios
.put(`http://localhost:8000/movie/${id}`, update)
.then((res)=>{
    getMovie()
})
}
    // ====================== DELETE ================ //
    const handleDelete = () =>{
        console.log(id)
        axios
            .delete(`http://localhost:8000/movie/${id}`)
            .then((res)=>{
                // return redirect('http://localhost:3000/mylist')
                window.location.href = 'http://localhost:3000/mylist';
            })
    }
// 

useEffect(()=>{
    getMovie()
},[])

    return (
        <>
        <h1>{movie.title}</h1>
        <img src= {movie.poster}/>
        <h5>{movie.duration} | {movie.type} | {movie.genre} | {movie.release_date}</h5>
        <p>{movie.description}</p>

        <details>
            <summary>Edit</summary>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">title: </label>
            <input type="text" name='title' onChange={handleupdate}/>
            <label htmlFor="name">Description: </label>
            <input type="text" name='description' onChange={handleupdate}/>
            <label htmlFor="name">poster: </label>
            <input type="text" name='poster' onChange={handleupdate}/>
            <label htmlFor="name">genre: </label>
            <input type="text" name='genre' onChange={handleupdate}/>
            <label htmlFor="name">type: </label>
            <input type="text" name='type' onChange={handleupdate}/>
            <label htmlFor="name">duration: </label>
            <input type="text" name='duration' onChange={handleupdate}/>
            <label htmlFor="name">release_date: </label>
            <input type="text" name='release_date' onChange={handleupdate}/>
            <input type="submit" />
        </form>
        </details>
        
        <button onClick={handleDelete} value={movie.id}>Remove</button>
        </>
    );
}

export default Showone;