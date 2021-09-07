import * as React from "react"
// import { useRef }from "react";
// import { useState, useEffect } from "react";
import { NavLink} from 'react-router-dom';
import { ReactComponent as CHATOPEN } from "../assets/icons/chatopen.svg"
import { ReactComponent as CHATCLOSED } from "../assets/icons/chatclosed.svg"

function Navbar({onClick, isActive, inProfile}){
    const [loggedIn, setLoggedIn] = React.useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
    const chat = JSON.parse(localStorage.getItem("chat"));

    const handleLogOut = () => {
        localStorage.clear();
        setLoggedIn(!loggedIn);
        window.open("/Auth","_self");
    }
    return(
        <div className="flex w-screen ">
            <section className="w-full px-8 text-gray-700 bg-secondary md:flex">
                {!inProfile &&
                        <div className="md:inline-flex items-center mr-4 space-x-6 lg:justify-end hidden ">
                            <button className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900 " type="button" onClick={onClick}>
                                {isActive && <CHATOPEN/>}
                                {!isActive && <CHATCLOSED/>}
                            </button>
                        </div>
                    
                }
                <div className="container flex flex-col flex-wrap items-center justify-between py-3 mx-auto md:flex-row max-w-7xl">
                    
                    <div className="relative flex flex-col md:flex-row">
                        
                        {/* <a href="#_" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                            <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">Study Buddy<span className="text-primary"></span></span>
                        </a> */}
                        <NavLink 
                            exact className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
                            to='/Landing'><span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">Study Buddy<span className="text-primary"></span></span>
                        </NavLink>
                        <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-primary-dark">
                            {/* <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Home</a>
                            <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Features</a>
                            <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Pricing</a>
                            <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Blog</a> */}
                            <NavLink 
                                exact className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 " 
                                to='/Landing'>Home
                            </NavLink>
                            {/* <NavLink 
                                exact className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900" 
                                to='/Profile'>Features
                            </NavLink>
                            <NavLink 
                                exact className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                                to='/Profile'>Pricing
                            </NavLink>
                            <NavLink 
                                exact className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                                to='/Profile'>Blog
                            </NavLink> */}
                        </nav>
                    </div>

                    {inProfile && 
                        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                            <button 
                                className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900" 
                                onClick={handleLogOut}
                            >
                                Logout
                            </button>
                            <NavLink 
                                exact className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-primary-light border border-transparent rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark " 
                                to='/Dashboard'>Dashboard
                            </NavLink>
                            
                        </div>}
                    {!inProfile &&
                        <div className="inline-flex items-center ml-1 space-x-6">
                            <div className="inline-flex items-center mr-1 space-x-6 justify-end">
                                <button className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900 md:invisible" type="button" onClick={onClick}>
                                    {isActive && <CHATOPEN/>}
                                    {!isActive && <CHATCLOSED/>}
                                </button>
                            </div>
                            
                            { user && user.accessToken ?
                        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                            <button 
                                className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900" 
                                onClick={handleLogOut}
                            >
                                Logout
                            </button>

                            <NavLink 
                                exact className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-primary-light border border-transparent rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark " 
                                to='/Profile'
                            >
                                {chat && chat.name}
                            </NavLink>
                            
                            
                        </div>
                        :
                            
                            <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                            <NavLink
                                exact className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
                                to='/Auth'
                            >
                                Sign in
                            </NavLink>
                            <NavLink
                                exact className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-primary-light border border-transparent rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark"
                                to='/Auth'
                            >
                                Sign up
                            </NavLink>
                            
                            {/* <a href="#" class="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                                Sign in
                            </a>
                            <a href="#" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-primary-light border border-transparent rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark">
                                Sign up
                            </a> */}
                        </div>
                    }
                        </div>
                        
                    }
                </div>
                
            </section>
            
        </div>
    )
}

export default Navbar;