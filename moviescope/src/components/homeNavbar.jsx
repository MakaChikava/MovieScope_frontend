import React, {useState} from "react";


const SearchNavbar = (props) => {

    return (
        // navbar
        <div className="bg-[#1e40af] flex flex-row justify-between h-20 shadow-xl shadow-gray-700">

        {/* logo container */}
            <div className="flex w-44">

        {/* logoname */}
                <div className="flex justify-center items-center w-28">
                    <h1 className="flex text-white">MovieScope</h1>
                </div>

        {/* logoimg */}
                <div className="flex w-20 items-center">
                    <img src='https://icon-library.com/images/white-video-camera-icon/white-video-camera-icon-7.jpg' className=" h-12 w-15"/>
                </div>
                
            </div>

        {/* link container */}
            <div className="flex items-center justify-start">
        {/* hamburger */}
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png' className="h-10 w-100% md:hidden"/>
        {/* links */}
                <div className=" hidden md:flex space-x-6">
                    <a href="#" className="text-white hover:text-black">Home</a>
                    <a href="#" className="text-white hover:text-black">Create List</a>
                    <a href="#" className="text-white hover:text-black">My List</a>

                </div>
        {/* hamburger Icon */}
        <button className="block hamburger md:hidden focus:outline-none"></button>
        
            </div>
        

        </div>
    );
}

export default SearchNavbar;