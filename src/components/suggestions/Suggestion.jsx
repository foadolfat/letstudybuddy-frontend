import * as React from "react"
import GPA from "../../assets/icons/GPA.jsx"
import PeerClasses from "../../services/PeerClasses.js";
import SuggestedPeerClasses from "./SuggestedPeerClasses.jsx";

function Suggestion({username, fname, lname, degree, major, peer_id, gpa, email}){
    const [classes, setClasses] = React.useState();

    React.useEffect(() => {
        console.log(gpa)
        const api = new PeerClasses();
        api.getPeerClasses(peer_id).then((newClasses) => {
            setClasses(newClasses.classes);
        }).catch((reason => {console.log(reason)}))
        if(classes) console.log(classes)
    },[]);
    

    return(

        <div className=" flex flex-col shadow-lg ">
            
            <div className="bg-primary-light rounded-t-lg 2xl:w-600 2xl:h-350  xl:w-500 xl:h-300  lg:w-400 lg:h-200  md:w-350 md:h-200  sm:w-350 sm:h-200  xs:w-350 xs:h-200">
                <img className="object-cover rounded-t-lg w-full h-full" 
                src="https://mymindmybody.net/wp-content/uploads/2018/12/Work-in-Progress-1024x1024.png" alt={"profilepic"}/>
            </div>
            <div className="flex flex-col justify-between bg-gray-200 xs:p-4 lg:p-8 text-gray-800 rounded-b-lg  xl:space-y-8 2xl:w-600 2xl:h-400  xl:w-500 xl:h-400  lg:w-400 lg:h-350  md:w-350 md:h-300  sm:w-350 sm:h-250  xs:w-350 xs:h-250">
           
                <div className="flex justify-between ">
                    <div className="text-sm font-bold text-gray-400 xs:space-y-2 xl:space-y-8">

                        {username && 
                        <div>
                            <span>Username:</span>
                            <div className="xl:text-xl 2xl:text-2xl font-bold text-gray-800">
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
                    <div className="text-sm font-bold text-gray-400 xs:space-y-2 xl:space-y-8">

                        {fname && lname &&
                        <div>
                            <span>Name:</span>
                            <div className="xl:text-xl 2xl:text-2xl font-bold text-gray-800">
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

                    <div className="w-1/4 text-sm font-bold text-gray-400">{gpa>0 && <span>GPA:</span>} 
                        {gpa>0 && <GPA percentage={(gpa/4)*100} speed={20} strokeColor={"green"}/>}
                    </div>

                </div>

                <div className="xl:text-lg font-bold text-gray-400">Classes in common with you:
                    <div className="flex md:h-28 space-x-4 xs:mt-2 md:mt-4 overflow-auto">
                        {classes && classes.length && classes.map((c, index) =>  { 
                              return <SuggestedPeerClasses
                                        key={c}
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