import * as React from "react"
import Profile from "../../services/Profile";

function ClassesDashV2({setClassUpdated, classUpdated, user_id, class_name, school, expected_end, prof}){
    return(
        <div className=" bg-secondary rounded-lg shadow-lg xxs:p-2 p-4 flex flex-col justify-center items-center ">
            <div className="text-xl xxs:text-sm font-bold text-gray-800 ">{class_name}</div>
            <div className="text-base xxs:text-sm font-bold text-gray-800">{prof}</div>
            <button className="bg-red-500 hover:bg-red-700 rounded-lg shadow-lg w-32 mt-2 p-1 text-sm text-gray-200" onClick={() => {
                const api = new Profile();
                api.deleteClass(class_name, school).then(() => {setClassUpdated(!classUpdated)})
            }}>Delete</button>
        </div>
    )
}

export default ClassesDashV2;