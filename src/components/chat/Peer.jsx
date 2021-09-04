import * as React from "react"
import socket from "../../services/SocketService"


const NEW_ROOM = "new-room-event"; 


function Peer({room, USERNAME, PEER_ID, ROOM_ID, setRoom}){
    const [currentRoom, setCurrentRoom] = React.useState(false);

    React.useEffect(()=>{
        if(ROOM_ID === room) setCurrentRoom(true);
        else setCurrentRoom(false);
    },[room])

    const handleClick = () => {
        socket.emit(NEW_ROOM, ROOM_ID);
        setRoom(ROOM_ID);
    }
    // {`${
    //     effect && "animate-wiggle"
    //   }  text-black font-bold text-base bg-secondary hover:bg-secondary-dark h-20 w-20 rounded-full shadow-lg`} 
    //   onAnimationEnd={() => setEffect(false)}
    return(
        
        <div>
            {currentRoom &&
                <button onClick={handleClick}
                        className="p-2 m-1 text-black break-normal 
                        no-text-wrap font-bold text-base bg-secondary 
                        hover:bg-secondary-dark h-20 w-20 rounded-full 
                        shadow-lg ring-2 ring-offset-4 
                        ring-primary-dark duration-500">
                    {
                        USERNAME
                    }
                </button>
            }
            {!currentRoom &&
                <button onClick={handleClick}
                        className="p-2 m-1 text-black break-normal 
                        no-text-wrap font-bold text-base 
                        bg-gray-400 hover:bg-gray-300 
                        h-20 w-20 rounded-full shadow-lg
                        focus:ring-2 focus:ring-offset-2 
                        focus:ring-primary-dark duration-500">
                    {
                        USERNAME
                    }
                </button>
            }
        </div>
    )
}

export default Peer;