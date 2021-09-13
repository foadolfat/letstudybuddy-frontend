import * as React from "react"
//import "./styles.css"
function Message({content, username, date}){
    const [currentUser, setCurrentUser] = React.useState(false)
    const chat = JSON.parse(localStorage.getItem("chat"));
    React.useEffect(() => {
        if(chat && chat.name && chat.name===username ) {
            setCurrentUser(true);
            console.log(chat.name)
        }
           
    }, [chat, username]);
    
    return(
        <div className="flex flex-col m-1 ">
            { currentUser && 
                <div className="">
                    <div className="pt-1 pb-1 pl-1 text-xs text-gray-400">{username}</div>
                    <div className="w-full">
                        <div className=" p-1 text-base font-serif break-words h-full max-w-full bg-blue-400 text-gray-800 rounded-2xl shadow-lg float-left">
                            {content}
                        </div>
                    </div>
                </div>
            }
            { !currentUser &&
                
                <div className="">
                    <div className="pt-1 pb-1 pr-1 text-xs text-gray-400 float-right">{username}</div>
                    <div className="w-full float-right">
                        <div className="p-1 text-base font-serif Break break-words h-full max-w-full bg-green-400 text-gray-800 rounded-2xl shadow-lg float-right">
                            {content}
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}
export default Message;