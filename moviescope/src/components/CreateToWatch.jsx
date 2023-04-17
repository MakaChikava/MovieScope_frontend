import React, { useState } from "react";
import axios from 'axios';
import Navbar from "./navbar";
import { Link } from "react-router-dom";

const CreateList = () => {
    const data = {title:'', description:'', poster:'', genre:'', type:'', duration:'', release_date:''}
    let [form, setForm] = useState(data)
    
    // ================= COLLECT FORM VALUES ================ //
    const handleChange = (e) =>{
        setForm({...form, 
            [e.target.name] : e.target.value})
            console.log(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios
            .post('http://localhost:8000/movie', form)
            .then((res)=>{
                console.log(res)
                window.location.href = 'http://localhost:3000/mylist';
            })
    }
    // =============== create movie list ============== //
    // const handleCreate = () =>{
        
    // }
    

    return (
        <>
        <Navbar/>
<br/>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="text-white">title: </label>
            <input type="text" name='title' onChange={handleChange} className="text-black"/>
            {/* <label htmlFor="name" className="text-white">Description: </label>
            <input type="text" name='description' onChange={handleChange} className="text-black"/> */}
            <label htmlFor="name" className="text-white">poster: </label>
            <input type="text" name='poster' onChange={handleChange} className="text-black"/>
            <label htmlFor="name" className="text-white">genre: </label>
            <input type="text" name='genre' onChange={handleChange} className="text-black"/>
            <label htmlFor="name" className="text-white">Description: </label>
            <input type="text" name='type' onChange={handleChange} className="text-black"/>
            <label htmlFor="name" className="text-white">duration: </label>
            <input type="text" name='duration' onChange={handleChange} className="text-black"/>
            <label htmlFor="name" className="text-white">release_date: </label>
            <input type="text" name='release_date' onChange={handleChange} className="text-black"/>
            {/* <input type="submit" className="text-white"/> */}
        </form>
        <button  onClick={handleSubmit}  className="text-white flex justify-center items-center bg-[#1543E4] text-white rounded-lg h-12 w-28 mx-2">submit</button>
        </>
    );
}

export default CreateList;