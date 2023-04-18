import React, {useState, useEffect} from "react"
import axios from "axios"
import Navbar from "./navbar"
import { redirect, useParams } from "react-router-dom"


const Showone = () => {

    let [movie, setmovie] = useState([])
    let [update, setUpdate] = useState({title:'', description:'', poster:'', genre:'', type:'', duration:'', release_date:''})

    const params = useParams();
    const id = params.id
    // =============== GET MOVIE DATA =============== //
    const getMovie = () => {
        
        axios
            .get(`https://moviescope-backend.onrender.com/movie/${id}`, movie)
            .then((res) => {
            setmovie(res.data)
            console.log(res.data)
        });
    };

    // ====================== UPDATE ================ //

const handleupdate = (e) =>{
setUpdate({...update,
[e.target.name] : e.target.value})
// console.log(e.target.value)
}
const handleSubmit = (e) =>{
e.preventDefault();
axios
.put(`https://moviescope-backend.onrender.com/movie/${id}`, update)
.then((res)=>{
    getMovie()
})
}

    // ====================== DELETE ================ //

    const handleDelete = () =>{
        console.log(id)
        axios
            .delete(`https://moviescope-backend.onrender.com/movie/${id}`)
            .then((res)=>{
                window.location.href = 'http://localhost:3000/mylist';
            })
    }
// 

useEffect(()=>{
    getMovie()
},[])

    return (
        <><Navbar/>
        <br/>
        <div className="flex flex-row w-full h-full">
        <div className="flex w-1/2 h-3/4">
            <img src= {movie.poster} className=""/>
        </div>
        <div className="flex w-1/2 flex-col">
            <h1 className="flex justify-center text-white font-bold text-lg">{movie.title}</h1>
            <h5 className="flex justify-center text-white font-medium">{movie.duration} | {movie.genre} | {movie.release_date}</h5>
            <br/>
            <div className="flex h-60 w-70 justify-center">
                <p className="flex text-white  flex-wrap">{movie.type}</p>
            </div>
            
        
        
        <div className="flex flex-row justify-around">
            <details>
                <summary className="text-white">Edit</summary>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="text-white">title: </label>
                <input type="text" name='title' onChange={handleupdate} className=""/>
                <label htmlFor="name" className="text-white">poster: </label>
                <input type="text" name='poster' onChange={handleupdate} className=""/>
                <label htmlFor="name" className="text-white">genre: </label>
                <input type="text" name='genre' onChange={handleupdate} className=""/>
                <label htmlFor="name" className="text-white">Description: </label>
                <input type="text" name='type' onChange={handleupdate} className=""/>
                <label htmlFor="name" className="text-white">duration: </label>
                <input type="text" name='duration' onChange={handleupdate} className=""/>
                <label htmlFor="name" className="text-white">release_date: </label>
                <input type="text" name='release_date' onChange={handleupdate} className=""/>
                <input type="submit" className="text-white"/>
            </form>
            </details>
        
        <button  onClick={handleDelete} value={movie._id} className="text-white flex justify-center items-center bg-[#1543E4] text-white rounded-lg h-12 w-28 mx-2">Remove</button>
        </div>
        </div>
        </div>
        </>
    );
}

export default Showone;