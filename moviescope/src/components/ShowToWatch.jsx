import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
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
        <h1>My Movies</h1>
        <div className="MyMovies">
            {movies.map((movie)=>{
                return(
                    <div key={movie.id}>
                        <h2>{movie.title}</h2>
                        <Link to= {`/movie/${movie.id}`}><img src={movie.poster}/></Link>
                        <button onClick={handleDelete} value={movie.id}>Remove</button>
                    </div>
                    
                );
            })};
        </div>
        </>
    );
}

export default MyMovies;