import { Parallax, ParallaxLayer } from '@react-spring/parallax'
// import { useSpring, animated } from 'react-spring'
import * as React from "react";
// import Navbar from '../components/Navbar';
import Login from '../components/auth/Login';
import SignUp from '../components/auth/Signup';
import { NavLink} from 'react-router-dom';
import { ReactComponent as LEFT } from "../assets/icons/chevron_left.svg"
import { ReactComponent as RIGHT } from "../assets/icons/chevron_right.svg"

function Auth () {
    const [userCreated, setUserCreated] = React.useState();



    let parallax;
    return (
        <div className="no-scrollbar overflow-hidden">
            
            <section className="w-full px-8 text-gray-700 bg-secondary no-scrollbar">
                <div className="container flex flex-col flex-wrap items-center justify-between py-3 mx-auto md:flex-row max-w-7xl">
                    <div className="relative flex flex-col md:flex-row">
                        <NavLink 
                            exact className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
                            to='/Landing'><span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">Study Buddy<span className="text-primary"></span></span>
                        </NavLink>
                        <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-primary-dark">
                            <NavLink 
                                exact className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 " 
                                to='/Landing'>Home
                            </NavLink>
                        </nav>
                    </div>

                    <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                        <button onClick={() => parallax.scrollTo(0)}  className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                            Sign in
                        </button>
                        <button onClick={() => parallax.scrollTo(2)}  className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-primary-light border border-transparent rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark">
                            Sign up
                        </button>
                    </div>
                </div>
            </section>
            {/* <Navbar/> */}
            <Parallax className="h-full no-scrollbar"  pages={3} enabled={true} ref={ref => parallax = ref} horizontal={true} >
                <ParallaxLayer id={"login"} offset={0} speed={0}/>
                <ParallaxLayer  offset={0} speed={0.5}>
                <div  className="flex flex-col items-center justify-center bg-primary  w-3/4 h-full shadow-xl " >  <Login userCreated={userCreated}/></div>
                </ParallaxLayer>
                <ParallaxLayer id={"signup"} offset={2} speed={0}/>
                <ParallaxLayer  offset={2.25} speed={0.5}>
                <div   className="flex flex-col items-center justify-center bg-primary  w-3/4 h-full shadow-xl " >  <SignUp setUserCreated={setUserCreated}/></div>
                </ParallaxLayer>
                <ParallaxLayer  offset={0.75} speed={0}>
                <div className="bg-secondary text-on-primary flex flex-row w-150% h-full shadow-xl " >
                    <button className="w-full flex flex-row justify-start items-center bg-transparent" onClick={() => parallax.scrollTo(2)}> 
                        <div className="absolute xs:text-3xl font-bold pl-4">Sign up</div> <RIGHT className="absolute xs:invisible sm:visible sm:w-60 sm:h-60 lg:w-96 lg:h-96"/> </button>

                    <div  className="w-200% bg-transparent"/>

                    <button  className="w-full flex flex-row justify-end items-center  bg-transparent" onClick={() => parallax.scrollTo(0)}> 
                        <LEFT  className="absolute xs:invisible sm:visible sm:w-60 sm:h-60 lg:w-96 lg:h-96"/> <div className="absolute font-bold xs:text-3xl pr-4">Sign in</div></button>
                </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}
export default Auth;

