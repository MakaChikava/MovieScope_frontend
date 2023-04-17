import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar from "./navbar";
const MyMovies = () => {
    let [movies, setMovies] = useState([])

    // =============== get movies data =============== //
    const getData = () =>{
        axios.
            get('http://localhost:8000/movies')
            .then((res)=>{
                setMovies(res.data)
                console.log(res.data)
            })
    }
// ==================== grab id from click on image
const handleDelete = (e) =>{
    console.log(e.target.value)
    axios
        .delete(`http://localhost:8000/movie/` + e.target.value)
        .then((res)=>{
            getData()
        })
}

    useEffect(()=>{
        getData()
    }, [])


    return (
        <>
        <Navbar/>
        <div className="my-20 flex flex-row flex-wrap justify-center">
            {movies.map((movie)=>{
                return(
                    <div className="flex flex-col m-5 justify-center" key={movie._id}>
                        
                        <Link to= {`/movie/${movie._id}`}><img src={movie.poster} className="hover:border hover:border-4 hover:rounded duration-200 border-white flex h-96 w-72 "/></Link>
                        <h2 className="flex justify-center text-white">{movie.title}</h2>
                        <button className="flex justify-center items-center bg-[#1543E4] text-white rounded-lg h-12 w-78 mx-2" onClick={handleDelete} value={movie.id}><img src='https://cdn-icons-png.flaticon.com/512/542/542724.png' className='h-8'/></button>
                    </div>
                    
                );
            })};
        </div>
        </>
    );
}

export default MyMovies;