import * as React from "react"
import { NavLink} from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { ReactComponent as PIG } from "../assets/pictures/pig.svg"
import { ReactComponent as BEAR } from "../assets/pictures/bear.svg"
import { ReactComponent as CAT } from "../assets/pictures/cat.svg"
import { ReactComponent as BOY } from "../assets/pictures/boy.svg"
import { ReactComponent as CHAT } from "../assets/icons/chatopen.svg"
import { ReactComponent as EDIT } from "../assets/icons/edit_solid.svg"
import { ReactComponent as LOGIN } from "../assets/icons/login.svg"
import { ReactComponent as ARROW_RIGHT } from "../assets/icons/arrow_right.svg"
import ace from "../assets/pictures/ace.png"

function Landing(){
    const [loggedIn, setLoggedIn] = React.useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
    const chat = JSON.parse(localStorage.getItem("chat"));
    const handleLogOut = () => {
        localStorage.clear();
        setLoggedIn(!loggedIn)
    }
    return(
        <div>

            <section className="w-full px-8 text-gray-700 bg-secondary">
                <div className="container flex flex-col flex-wrap items-center justify-between py-3 mx-auto md:flex-row max-w-7xl">
                <div className="relative flex flex-col  xs:space-x-4 xs:flex-row">

                    <NavLink
                            exact className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
                            to='/Landing'><span className="mx-auto text-xl font-black leading-none text-gray-900 select-none flex items-center">
                                <img  src={ace} className="w-10 h-10 " alt="logo"/>
                                Study Buddy<span className="text-primary"></span></span>
                        </NavLink>
                        <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-primary-dark">

                            {/* <NavLink 
                                exact className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 " 
                                to='/Landing'>Home
                            </NavLink> */}
                            <NavLink 
                                exact className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900" 
                                to='/Dashboard'>Dashboard
                            </NavLink>
                            <NavHashLink 
                                exact className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                                smooth to='/#features'>Features
                            </NavHashLink>
                            {/* <NavLink 
                                exact className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                                to='/Profile'>Blog
                            </NavLink> */}
                        </nav>
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
                            
                            <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                            <NavHashLink
                                exact className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
                                to='/Auth#login'
                            >
                                Sign in
                            </NavHashLink>
                            <NavHashLink
                                exact className=" inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-primary-light border border-transparent rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark"
                                to='/Auth#signup'
                            >
                                Sign up
                            </NavHashLink>

                        </div>
                    }
                </div>
            </section>


            <section className="px-2 pt-32 bg-primary-light md:px-0">
                <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-left text-on-primary-light sm:text-5xl md:text-6xl md:text-center">
                        <span className="block">Find Your <span className="block mt-1 text-secondary lg:inline lg:mt-0">Ace Study Buddy</span></span>
                    </h1>
                    <p className="w-full mx-auto text-base text-left text-on-primary-light md:max-w-md sm:text-lg lg:text-2xl md:text-center">
                        Modern tool to find the perfect study partner!
                    </p>
                    <div className="relative flex flex-col justify-center md:flex-row md:space-x-4">
                        { !user &&
                            <NavHashLink
                                exact className="flex items-center font-medium w-full px-6 py-3 mb-3 text-lg text-on-secondary bg-secondary rounded-md md:mb-0 hover:bg-secondary-dark hover: text-on-secondary-dark md:w-auto"
                                to='/Auth#signup'
                            >
                                Sign Up Free
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </NavHashLink>
                        }

                        <NavHashLink 
                            exact className="flex items-center px-6 py-3 font-medium text-primary bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                            smooth to="#how"
                        >
                            How it works
                        </NavHashLink>

                    </div>
                </div>
                <div className="container items-center max-w-4xl px-5 mx-auto mt-8 text-center">
                    <BOY  alt="Main Image"/>
                    {/* <img src="https://cdn.devdojo.com/images/november2020/hero-image.png" alt="Main Image"/> */}
                </div>
            </section>


            <section class="py-20 bg-page-background" id="how" >
            <div class="container items-center max-w-6xl  mx-auto sm:px-20 md:px-32 lg:px-16">
                <div class="flex flex-wrap items-center -mx-3">
                <div class="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                    <div class="w-full lg:max-w-md">
                    <h2 class="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">How to get started:</h2>
                    
                    <ul>
                        <li class="flex items-center py-2 space-x-4 xl:py-3">
                        <LOGIN/>
                        <span class="font-medium text-gray-500"><strong>Sign up</strong> and <strong>Login</strong> to your profile</span>
                        </li>
                        <li class="flex items-center py-2 space-x-4 xl:py-3">
                        <EDIT class="h-8 w-8"/>
                        <span class="font-medium text-gray-500">Add at least one class to your <strong>Profile</strong></span>
                        </li>
                        <li class="flex items-center py-2 space-x-4 xl:py-3">
                        <ARROW_RIGHT/>
                        <span class="font-medium text-gray-500">Go to <strong>Dashboard</strong> and pick your choice of reccomendations by <strong>swiping</strong> right on their card</span>
                        </li>
                        <li class="flex items-center py-2 space-x-4 xl:py-3">
                        <CHAT/>
                        <span class="font-medium text-gray-500"><strong>Chat</strong> with your matches by pressing the chat icon on the top left</span>
                        </li>
                    </ul>
                    </div>
                </div>
                <div class="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img class="mx-auto sm:max-w-sm lg:max-w-full" src="https://cdn.devdojo.com/images/november2020/feature-graphic.png" alt="feature image"/></div>
                </div>
            </div>
            </section>


            <section className="w-full bg-page-background pt-7 pb-7 md:pt-20 md:pb-24">
                <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

                    <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                        <BEAR className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "/>
                       {/* <img src="https://cdn.devdojo.com/images/december2020/productivity.png" alt="Gist Image" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "/> */}
                    </div>

             
                    <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                            Find Partners
                        </h2>
                        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                            Find study partners that match your study style based on your custom profile.
                        </p>
                        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-secondary-light rounded-full"><span className="text-sm font-bold">✓</span></span> Personalize your profile
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-secondary-light rounded-full"><span className="text-sm font-bold">✓</span></span> Choose your class priority
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-secondary-light rounded-full"><span className="text-sm font-bold">✓</span></span> Pick partners from our reccomendation list
                            </li>
                        </ul>
                    </div>
                 
                </div>
                <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

               
                    <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
                        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                            Study Together
                        </h2>
                        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                            Chat with your reccomendations and study together.
                        </p>
                        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-secondary-light rounded-full"><span className="text-sm font-bold">✓</span></span> Connect with your reccomended partners
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-secondary-light rounded-full"><span className="text-sm font-bold">✓</span></span> Chat in groups or individually
                            </li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-secondary-light rounded-full"><span className="text-sm font-bold">✓</span></span> Study together
                            </li>
                        </ul>
                    </div>
                 

                    <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                        <PIG className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"/>
                        {/* <img src="https://cdn.devdojo.com/images/december2020/settings.png" alt="Gist Image" className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"/> */}
                    </div>
                </div>
            </section>



            <section className="py-20 bg-primary-light" id="features">
                <div className="container max-w-6xl mx-auto">
                    <h2 className="text-4xl text-on-primary-light font-bold tracking-tight text-center">Our Features</h2>
                    <p className="mt-2 text-lg text-center text-on-primary-light">Check out our list of awesome features below.</p>
                    <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">

                        <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-secondary rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"></path><circle cx="6" cy="14" r="3"></circle><path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"></path></svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Reccomendations</h4>
                            <p className="text-base text-center text-gray-500">Information you provide are used to tailor a list of students that would be suitable study partners for you.</p>
                        </div>

                        <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-secondary rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 8a3 3 0 0 1 0 6"></path><path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"></path><path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"></path></svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Double Tap</h4>
                            <p className="text-base text-center text-gray-500">You'll only be notified that someone wants to study with you if you want to study with them as well.</p>
                        </div>

                        <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-secondary rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline><line x1="12" y1="12" x2="20" y2="7.5"></line><line x1="12" y1="12" x2="12" y2="21"></line><line x1="12" y1="12" x2="4" y2="7.5"></line><line x1="16" y1="5.25" x2="8" y2="9.75"></line></svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Chat</h4>
                            <p className="text-base text-center text-gray-500">Easily chat with all your current study partners and switch between them as you change classNamees.</p>
                        </div>

                        <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-secondary rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 9l3 3l-3 3"></path><line x1="13" y1="15" x2="16" y2="15"></line><rect x="3" y="4" width="18" height="16" rx="2"></rect></svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">All In One Dashboard</h4>
                            <p className="text-base text-center text-gray-500">Dashboard that allows for chatting, viewing friendslist and finding new study partners all in one.</p>
                        </div>

                        <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-secondary rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="9.5" y1="11" x2="9.51" y2="11"></line><line x1="14.5" y1="11" x2="14.51" y2="11"></line><path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path><path d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3"></path></svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Customizable Profile</h4>
                            <p className="text-base text-center text-gray-500">Information provided in profile allows for better reccomendations. Your GPA, School, Degree, etc can all be customized. </p>
                        </div>

                        <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-secondary rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="15" y1="5" x2="15" y2="7"></line><line x1="15" y1="11" x2="15" y2="13"></line><line x1="15" y1="17" x2="15" y2="19"></line><path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path></svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">Free of charge!</h4>
                            <p className="text-base text-center text-gray-500">All these features are provided at no cost to you. As students ourselves, we want to help and we know money can be tight.</p>
                        </div>

                    </div>
                </div>
            </section>


            <section className="flex items-center justify-center py-10 text-white bg-page-background sm:py-16 md:py-24 lg:py-32">
                <div className="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
                    <div className="flex flex-col w-full md:flex-row">

                    
                        <div className="flex justify-between">
                            <h1 className="relative flex flex-col text-6xl font-extrabold text-left text-black">
                                Learn
                                <span>Better</span>
                                <span>Together</span>
                            </h1>
                        </div>
                       
                        <div className="relative top-0 right-0 h-64 mt-12 md:-mt-16 md:absolute md:h-96">
                            <CAT className="object-cover mt-3 mr-5 h-80 lg:h-96"/>
                            {/* <img src="https://cdn.devdojo.com/images/december2020/designs3d.png" alt="Single Gist" className="object-cover mt-3 mr-5 h-80 lg:h-96"/> */}
                        </div>
                    </div>

                   
                    <div className="my-16 border-b border-gray-300 lg:my-24"></div>

                    
                    <h2 className="text-left text-gray-500 xl:text-xl">
                    Providing you with the tools to find the perfect study partner. Our reccomendation engine will help you study better than before by connecting you with like minded people. Sign up today and get started.
                    </h2>
                </div>
            </section>

            


            <section className="py-20 bg-primary-light">
                <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold tracking-tight text-on-primary-light sm:text-4xl md:text-5xl xl:text-6xl">
                        A better way to learn
                    </h2>
                    <p className="max-w-md mx-auto mt-3 text-base text-on-primary-light sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Use our modern reccomendation engine to find academic success. We know how to help you study, because we've been there.
                    </p>
                    <div className="flex justify-center mt-8 space-x-3">
                    { !user &&
                            <NavHashLink
                                exact className="flex items-center font-medium w-full px-6 py-3 mb-3 text-lg text-on-secondary bg-secondary rounded-md md:mb-0 hover:bg-secondary-dark hover: text-on-secondary-dark md:w-auto"
                                to='/Auth/#signup'
                            >
                                Sign Up Free
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </NavHashLink>
                        }
                        <NavHashLink 
                            exact className="flex items-center px-6 py-3 font-medium text-primary bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                            smooth to="#how"
                        >
                            Learn More
                        </NavHashLink>
                    </div>
                </div>
            </section>
        
            <section className="bg-page-background">
                <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                    <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                        <div className="px-5 py-2">
                            <NavHashLink 
                                exact className="text-base leading-6 text-gray-500 hover:text-gray-900"
                                smooth to="#how"
                            >
                                About
                            </NavHashLink>
                        </div>
                        {/* <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Blog
                            </a>
                        </div> */}
                        {/* <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Team
                            </a>
                        </div> */}
                        {/* <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Pricing
                            </a>
                        </div> */}
                        {/* <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Contact
                            </a>
                        </div> */}
                        {/* <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Terms
                            </a>
                        </div> */}
                    </nav>
                    <div className="flex justify-center mt-8 space-x-6">
                        {/* <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Facebook</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                            </svg>
                        </a> */}
                        {/* <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Instagram</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                            </svg>
                        </a> */}
                        {/* <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                        </a> */}
                        {/* <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">GitHub</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                            </svg>
                        </a> */}
                        {/* <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Dribbble</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path>
                            </svg>
                        </a> */}
                    </div>
                    <p className="mt-8 text-base leading-6 text-center text-gray-400">
                        {/* © 2021 SomeCompany, Inc. All rights reserved. */}
                        AceStudyBuddy
                    </p>
                </div>
            </section>

        </div>
    )

}

export default Landing;