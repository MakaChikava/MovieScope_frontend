import React, {useState, useEffect} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import MyMovies from "./ShowToWatch"
const ShowOne = () => {
    let [showOne, setShowOne] = useState([])

    const params = useParams();
    const id = params.id
    // =============== get backend data =============== //
    const handleUpdate = () => {
        console.log();
        axios
            .get(`http://localhost:8000/articles/${id}`, showOne)
            .then((res) => {
            setShowOne(res.data)
            console.log(res.data)
        });
    };

useEffect(()=>{
    handleUpdate()
})

    return (
        <>
        <h1>show </h1>
        {showOne.title}
        </>
    );
}

export default ShowOne;