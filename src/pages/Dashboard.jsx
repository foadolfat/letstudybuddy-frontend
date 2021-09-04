import * as React from "react"
// import ClassesDash from "../components/classes/ClassesDash";
import Navbar from "../components/Navbar";
import Chat from "../components/chat/Chat";
import Suggestions from "../components/suggestions/Suggestions";
import { useState, useEffect }from "react";
// import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { useSpring, animated } from 'react-spring'
import { useResizeDetector } from 'react-resize-detector';
// import GPA from "../assets/icons/GPA.jsx"

function Dashboard(){

    const mediaMatch = window.matchMedia('(min-width: 765px)');
    const [matches, setMatches] = useState(mediaMatch.matches);
    const { width, ref } = useResizeDetector();
    const [isActive, setIsActive] = useState(false);
    const w = width ? -width/2 : -200;
    const onClick = () => setIsActive(!isActive);

    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addListener(handler);
        return () => mediaMatch.removeListener(handler);
    });


    const chatSlide = useSpring({
        transform: isActive ? `translate3d(0%,0,0)` : `translate3d(-150%,0,0)`,

    })
    const suggestSlide = useSpring({ 
        transform: isActive || !matches ? `translateX(0px)` : `translateX(${w}px)`

    })

    return(
        

        <div className="parent xs:flex xs:flex-col bg-gray-300">
            <div className="">
                <Navbar onClick={onClick} isActive={isActive} inProfile={false}/>
            </div>

            <div className="flex md:flex-row-reverse xs:flex-col xs:items-center md:m-0 xs:mb-4 xs:overflow-visible md:overflow-none h-screen w-screen">
                
                <animated.div className=" xs:mt-56 xs:mb-4 h-full w-full flex justify-center items-center md:m-0 xs:mb-4 xs:pt-4" style={suggestSlide}>
                    <Suggestions/>
                </animated.div>


                <animated.div ref={ref} className="xs:mt-56 md:mt-0 md:ml-4" style={chatSlide}>
                    <Chat  toggle={isActive} />
                </animated.div>

            </div>


        </div>  
        
        
    )
}

export default Dashboard;