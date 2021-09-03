import * as React from "react"

function SuggestedPeerClasses({user_id, class_name, school, expected_end, prof}){
    return(
        <div className=" bg-secondary rounded-lg shadow-lg p-6">
            <div className="text-xl font-bold text-gray-800 ">{class_name}</div>
            <div className="text-base font-bold text-gray-800">{prof}</div>
        </div>
    )
}

export default SuggestedPeerClasses;