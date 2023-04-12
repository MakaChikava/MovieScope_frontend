import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, redirect } from "react-router-dom";

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
        handleCreate()
    }
    // =============== create movie list ============== //
    const handleCreate = () =>{
        axios
            .post('http://localhost:8000/movie', form)
            .then((res)=>{
                console.log(res)
                window.location.href = 'http://localhost:3000/mylist';
            })
    }
    

    return (
        <>
        <h1>Create List</h1>

        <form onSubmit={handleSubmit}>
        <label htmlFor="name">title: </label>
            <input type="text" name='title' onChange={handleChange}/>
            <label htmlFor="name">Description: </label>
            <input type="text" name='Description' onChange={handleChange}/>
            <label htmlFor="name">poster: </label>
            <input type="text" name='poster' onChange={handleChange}/>
            <label htmlFor="name">genre: </label>
            <input type="text" name='genre' onChange={handleChange}/>
            <label htmlFor="name">type: </label>
            <input type="text" name='type' onChange={handleChange}/>
            <label htmlFor="name">duration: </label>
            <input type="text" name='duration' onChange={handleChange}/>
            <label htmlFor="name">release_date: </label>
            <input type="text" name='release_date' onChange={handleChange}/>
            <input type="submit" />
        </form>
        </>
    );
}

export default CreateList;