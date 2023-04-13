import React, {useState} from "react";


const searchNavbar = (props) => {

    return (
        <div className="nav">
            <div className="logo">
                <h1>MovieScope <FontAwesomeIcon icon="fa-solid fa-camera-movie" style={{color: "#ffffff",}} /></h1>
        </div>
        <div className="searchbar">
            <form>
                <input type="search" placeholder="search keywords"/>
                <input type="submit" />
            </form>

        <div className="hamburgermenu">
        <FontAwesomeIcon icon="fa-solid fa-bars" className="dropbtn"/>
        <div className="dropcontent">
            <a href="#">Link 1</a>
            <a href="#">Link 1</a>
            <a href="#">Link 1</a>
        </div>
        </div>
        </div>

        </div>
    );
}

export default searchNavbar;