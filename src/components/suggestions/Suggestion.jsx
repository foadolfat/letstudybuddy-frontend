import * as React from "react"
import GPA from "../../assets/icons/GPA.jsx"
import PeerClasses from "../../services/PeerClasses.js";
import SuggestedPeerClasses from "./SuggestedPeerClasses.jsx";
import { ReactComponent as ARROW_RIGHT } from "../../assets/icons/long_arrow_right.svg"
import { ReactComponent as ARROW_LEFT } from "../../assets/icons/long_arrow_left.svg"
import { ReactComponent as CAP } from "../../assets/icons/cap.svg"

function Suggestion({username, fname, lname, degree, major, peer_id, gpa, email}){
    const [classes, setClasses] = React.useState();

    React.useEffect(() => {
        let mounted = true;
        if (mounted){    
            console.log(gpa)
            const api = new PeerClasses();
            api.getPeerClasses(peer_id).then((newClasses) => {
                setClasses(newClasses.classes);
            }).catch((reason => {console.log(reason)}))
            if(classes) console.log(classes)}
        return () => mounted = false;
    },[]);
    

    return(

        <div className=" flex flex-col shadow-lg ">
            
            {/* <div className="bg-primary-light rounded-t-lg 2xl:w-600 2xl:h-350  xl:w-500 xl:h-300  lg:w-400 lg:h-200  md:w-350 md:h-200  sm:w-350 sm:h-200  xs:w-350 xs:h-200">
                <img className="object-cover rounded-t-lg w-full h-full" 
                src="https://mymindmybody.net/wp-content/uploads/2018/12/Work-in-Progress-1024x1024.png" alt={"profilepic"}/>
            </div> */}
            {/* <div className="flex flex-col justify-between bg-gray-200 xs:p-4 lg:p-8 text-gray-800 rounded-b-lg  xl:space-y-8 2xl:w-600 2xl:h-400  xl:w-500 xl:h-400  lg:w-400 lg:h-350  md:w-350 md:h-300  sm:w-350 sm:h-250  xs:w-350 xs:h-250"> */}
            <div className="flex flex-col bg-gray-200 text-gray-800 rounded-lg 

                            xxs:p-4 lg:p-8 


                            2xl:w-500 2xl:h-500
                            xl:w-500 xl:h-500  
                            lg:w-500 lg:h-500  
                            md:w-350 md:h-500  
                            sm:w-350 sm:h-450  
                            xs:w-350 xs:h-450
                            xxs:w-250 xxs:h-400">
                <span className="flex justify-between lg:text-base lg:font-bold lg:pb-2 xxs:text-sm xxs:font-thin xxs:pb-0 text-secondary-dark"><ARROW_LEFT/> Swipe left to ignore <CAP/> Swipe right to match<ARROW_RIGHT/></span>
                <div className="flex xxs:flex-col lg:flex-row xxs:space-y-6 lg:space-y-0 justify-between">
                    <div className="flex xxs:w-full lg:w-3/4">
                        <div className="text-sm font-bold text-gray-400 xxs:space-y-6 lg:space-y-12  w-200">
                            {username &&
                            <div>
                                <span>Username:</span>
                                <div className="flex lg:text-xl xxs:text-sm md:text-base font-bold text-gray-800 items-center">
                                    {username}
                                </div>
                            </div>}
                            {major &&
                            <div className="text-sm font-bold text-gray-400">
                                <span>Major:</span>
                                <div className="xl:text-xl font-bold text-gray-800">
                                    {major && major}
                                </div>
                            </div>}
                        
                        </div>
                        <div className="text-sm font-bold text-gray-400 xxs:space-y-6 lg:space-y-12  w-200">
                            {fname && lname &&
                            <div>
                                <span>Name:</span>
                                <div className="flex lg:text-xl xxs:text-sm md:text-base font-bold text-gray-800 items-center">
                                    {fname} {lname}
                                </div>
                            </div>
                            }
                            {degree &&
                            <div className="text-sm font-bold text-gray-400">
                                <span>Degree:</span>
                                <div className="xl:text-xl font-bold text-gray-800">
                                    {degree && degree}
                                </div>
                            </div>
                            }
                        
                        </div>
                    </div>
                    <div className="lg:w-1/3">
                        <div className="xxs:w-1/3 lg:w-full text-sm font-bold text-gray-400">{gpa>0 && <span>GPA:</span>} 
                            {gpa>0 && <GPA percentage={(gpa/4)*100} speed={20} strokeColor={"green"}/>}
                        </div>
                    </div>

                </div>

                <div className="text-lg 
                                xxs:text-sm  xxs:pt-4
                                md:text-base md:pt-8
                                lg:text-lg lg:pt-28
                                font-bold text-gray-400">
                    Classes in common with you:
                    <div className="flex space-x-4 xxs:mt-1 mt-4 overflow-auto">
                        {classes && classes.length && classes.map((c, index) =>  { 
                              return <SuggestedPeerClasses
                                        key={c.USER_ID + c.CLASS_NAME + c.SCHOOL}
                                        user_id={c.USER_ID}
                                        class_name={c.CLASS_NAME}
                                        school={c.SCHOOL}
                                        expected_grad={c.EXPECTED_GRAD}
                                        prof={c.PROF}/>
                          })}
                    </div>
                </div>
            </div>
        </div>




    )

}

export default Suggestion;