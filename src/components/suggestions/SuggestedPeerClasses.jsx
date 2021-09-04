import * as React from "react"

function SuggestedPeerClasses({user_id, class_name, school, expected_end, prof}){
    return(
        <div className=" bg-secondary rounded-lg shadow-lg xs:p-2 md:p-4 flex flex-col justify-center items-center md:space-y-2">
            <div className="text-2xl font-bold text-gray-800 ">{class_name}</div>
            <div className="text-base font-bold text-gray-800">{prof}</div>
            <div className="text-sm font-bold text-gray-800">{school}</div>
        </div>
    )
}

export default SuggestedPeerClasses;