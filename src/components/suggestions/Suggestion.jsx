import * as React from "react"
import GPA from "../../assets/icons/GPA.jsx"

function Suggestion({username, fname, lname, degree, major, peer_id, gpa}){

    

    return(

        <div className=" flex flex-col shadow-lg ">
            
            <div className="bg-primary-light rounded-t-lg 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-350 md:h-200  sm:w-300 sm:h-200  xs:w-300 xs:h-200">
                <img className="object-cover rounded-t-lg w-full h-full" 
                src="https://mymindmybody.net/wp-content/uploads/2018/12/Work-in-Progress-1024x1024.png" alt={"profilepic"}/>
            </div>
            <div className="bg-gray-200 p-8 text-gray-800 rounded-b-lg space-y-4 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-350 md:h-200  sm:w-300 sm:h-200  xs:w-300 xs:h-200">
            {/* xs:flex-col md:flex-row xl:text-xl lg:text-md md:space-x-16 lg:space-x-24 2xl:space-x-36 xs:space-y-4 md:space-y-0 */}
                <div className="flex justify-between ">
                    <div className="text-sm font-bold text-gray-400 space-y-4">Username: 
                        <div className="text-xl font-bold text-gray-800">
                            {username}
                        </div>
                        <div>Major:
                            <div className="text-xl font-bold text-gray-800">
                                {major}
                            </div>
                        </div>
                        
                    </div>
                    <div className="text-sm font-bold text-gray-400 space-y-4">Name: 
                        <div className="text-xl font-bold text-gray-800">
                            {fname} {lname}
                        </div>
                        <div>Degree: 
                            <div className="text-xl font-bold text-gray-800">
                                {degree}
                            </div>
                        </div>
                        
                    </div>
                    <div className="w-1/6 text-sm font-bold text-gray-400">GPA: 
                        <GPA percentage={(gpa/4)*100} speed={20} strokeColor={"green"}/>
                    </div>
                </div>

                <div className="text-lg font-bold text-gray-400">Classes in common with you:
                
                </div>
            </div>
        </div>




    )

}

export default Suggestion;