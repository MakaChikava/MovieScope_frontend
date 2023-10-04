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
            .post('https://moviescope-backend.onrender.com/movie', form)
            .then((res)=>{
                console.log(res)
                window.location.href = 'https://moviescope-frontend-3zkq8b3gv-makachikava.vercel.app/mylist'; //https://moviescope-frontend-3zkq8b3gv-makachikava.vercel.app/mylist
            })
    }
    // =============== create movie list ============== //
    // const handleCreate = () =>{
        
    // }
    

    return (
        <>
        <Navbar/>
<br/>

<div className="flex flex-col  w-full">
        <form onSubmit={handleSubmit}>
        <div className="flex justify-center my-5">
            <input type="text" name='title' onChange={handleChange} placeholder="Title" className="text-black" id="create"/>
        </div>

        <div className="flex justify-center my-5">
            <input type="text" name='poster' onChange={handleChange} placeholder="Image adress" className="text-black" id="create"/>
        </div>
            
        <div className="flex justify-center my-5">
            <input type="text" name='genre' onChange={handleChange} placeholder="genre" className="text-black" id="create"/>
        </div>
            
        <div className="flex justify-center my-5">
            <input type="text" name='type' onChange={handleChange} placeholder="Description" className="text-black" id="create"/>
        </div>
            
        <div className="flex justify-center my-5">
            <input type="text" name='duration' onChange={handleChange} placeholder="duration" className="text-black" id="create"/>
        </div>
            
        <div className="flex justify-center my-5">
            <input type="text" name='release_date' onChange={handleChange} placeholder="release_date" className="text-black" id="create"/>
        </div>
        </form>
        <div className="flex justify-center my-5">
            <button  onClick={handleSubmit}  className="text-white font-bold  font-mono flex justify-center items-center bg-[#1543E4] text-white rounded-lg h-12 w-1/4 mx-2">submit</button>
        </div>
        
        </div>
        </>
    );
}

export default CreateList;