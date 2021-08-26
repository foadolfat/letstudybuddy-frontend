import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import {ReactComponent as EDIT} from "../../assets/icons/edit_solid.svg"
import {ReactComponent as SAVE} from "../../assets/icons/check_solid.svg"


function FlipUserCard() {
  const [isToggled, setToggle] = useState(false);

  const saveFade = useSpring({
        transform: isToggled ? `translate3d(0,0,0)` : `translate3d(400px,0,0)`,
        // opacity: isToggled ? 0 : 1
  })
  const editFade = useSpring({
        transform: isToggled ? `translate3d(400px,0,0)` : `translate3d(0,0,0)`,
        // opacity: isToggled ? 1 : 0
  })
  return (
    <div className="flex flex-row space-x-0">
        <animated.div style={saveFade}>
            <div  className="flex w-screen h-screen  items-center">

                <div className="mx-auto flex flex-col justify-center shadow-lg">
                    
                    <div className="bg-primary-light rounded-t-lg 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-350 md:h-200  sm:w-300 sm:h-200  xs:w-300 xs:h-200">
                        <div className="relative w-full h-full">
                            <img className="object-cover rounded-t-lg w-full h-full"
                            src="https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg"/>
                            <button className="absolute text-secondary-dark hover:text-primary-light top-0 right-0" onClick={()=>setToggle(!isToggled)}><SAVE/></button>
                        </div>
                    </div>
                    <div className="bg-secondary-dark xs:p-2 md:p-6 text-on-primary-dark rounded-b-lg sm:space-y-4 xl:space-y-6 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-350 md:h-200  sm:w-300 sm:h-200  xs:w-300 xs:h-200">
                        <div className="flex xs:flex-col md:flex-row xl:text-xl lg:text-md md:justify-between md:space-x-2 xs:space-y-4 md:space-y-0">
                            <div className="" >Name: <input type="text" className="w-full text-gray-800 rounded-sm focus:outline-none"></input></div>
                            <div className="" >Major: <input type="text" className="w-full text-gray-800 rounded-sm focus:outline-none"></input></div>
                            <div className="" >GPA: <input type="text" className="w-full text-gray-800 rounded-sm focus:outline-none"></input></div>
                            
                        </div>
                        <div className="xs:hidden md:flex md:flex-row">Class priorities:
                            <div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </animated.div>
        <animated.div style={editFade}>
        <div className="flex w-screen h-screen  items-center">

            <div className="mx-auto flex flex-col justify-center shadow-lg">

                <div className="bg-primary-light rounded-t-lg 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-350 md:h-200  sm:w-300 sm:h-200  xs:w-300 xs:h-200">
                    <div className="relative w-full h-full">
                        <img className="object-cover rounded-t-lg w-full h-full"
                        src="https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg"/>
                        <button className="absolute text-primary-light hover:text-secondary-dark top-0 right-0" onClick={()=>setToggle(!isToggled)}><EDIT/></button>
                    </div>
                </div>
                <div className="bg-primary-dark p-8 text-on-primary-dark rounded-b-lg xs:space-y-4 xl:space-y-6 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-350 md:h-200  sm:w-300 sm:h-200  xs:w-300 xs:h-200">
                    <div className="flex xs:flex-col md:flex-row xl:text-xl lg:text-md md:space-x-16 lg:space-x-24 2xl:space-x-36 xs:space-y-4 md:space-y-0">
                        <div>Name:</div>
                        <div>Major:</div>
                        <div>GPA:</div>
                        
                    </div>
                    <div className="xs:hidden md:flex md:flex-row">Class priorities:</div>
                </div>

            </div>

        </div>
        </animated.div>
    </div>
  )
}
export default FlipUserCard;