import * as React from "react"

function Suggestion({name, major, peer_id}){

    return(



        <div className=" flex flex-col shadow-lg">
            <div className="bg-primary-light rounded-t-lg 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-350 md:h-200  sm:w-300 sm:h-200  xs:w-300 xs:h-200">
                <img className="object-cover rounded-t-lg w-full h-full" 
                src="https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg" alt={"profilepic"}/>
            </div>
            <div className="bg-primary-dark p-8 text-on-primary-dark rounded-b-lg space-y-4 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-350 md:h-200  sm:w-300 sm:h-200  xs:w-300 xs:h-200">
                <div className="flex xs:flex-col md:flex-row xl:text-xl lg:text-md md:space-x-16 lg:space-x-24 2xl:space-x-36 xs:space-y-4 md:space-y-0">
                    <div>Name:</div>{name}
                    <div>Major:</div>{major}
                    <div>GPA:</div>
                    
                </div>
                <div className="xs:hidden md:flex md:flex-row">Class priorities:</div>
            </div>
        </div>









        // <div className="">
        //     <div className="bg-primary-light image rounded-t-lg 2xl:w-full 2xl:h-full xl:h-full xl:w-full lg:h-3/4 lg:w-3/4 md:h-3/4 md:w-3/4 sm:h-0 sm:w-0 xs:h-0 xs:w-0 sh:h-1/2 xsh:invisible rounded-b-lg">
        //         <img className="object-cover w-full h-full invisible 2xl:visible xl:visible lg:visible lg:rounded-t-lg lg:rounded-b-none md:visible md:rounded-lg sm:invisible xs:invisible sh:rounded-lg xsh:invisible sh:mt-60" 
        //         src="https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg"/>
        //     </div>
        //     <div className="bg-primary-dark 2xl:card xl:h-80 xl:w-full lg:h-60 lg:w-3/4 md:h-full md:w-3/4 sm:h-0 sm:w-0 xs:h-0 xs:w-0 sh:invisible xsh:invisible rounded-b-lg ">
            
        //     </div>
        // </div>
        

    )

}

export default Suggestion;