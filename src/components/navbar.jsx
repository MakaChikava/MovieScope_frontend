import React from "react";


const Navbar = () => {

    return (
        // navbar
        <div className="bg-[#1e40af] flex flex-row justify-between h-20 shadow-lg shadow-blue-600">

        {/* logo container */}
            <a href='/' className="flex"><div className="mx-4 flex w-44">

        {/* logoname */}
                <div className="flex justify-center items-center w-28">
                    <h1 className="flex text-white font-bold italic font-mono text-xl">MovieScope</h1>
                </div>

        {/* logoimg */}
                <div className="flex w-20 items-center">
                    <img src='https://icon-library.com/images/white-video-camera-icon/white-video-camera-icon-7.jpg' className="mx-2 h-8 w-15"/>
                </div>
                
            </div></a>

        {/* link container */}
            <div className="mx-5 flex items-center justify-start">
        {/* hamburger */}
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png' className="h-10 w-100% md:hidden"/>
        {/* links */}
                <div className=" hidden md:flex space-x-6">
                    <a href="/create" className="text-white font-bold italic font-mono hover:text-black">Create List</a>
                    <a href="/mylist" className="text-white font-bold italic font-mono hover:text-black">My List</a>

                </div>
        {/* hamburger Icon */}
        <button className="block hamburger md:hidden focus:outline-none"></button>
        
            </div>
        

        </div>
    );
}

export default Navbar;