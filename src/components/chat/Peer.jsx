import socket from "../../services/SocketService"


const NEW_ROOM = "new-room-event"; 


function Peer({USERNAME, PEER_ID, ROOM_ID, setRoom}){
    const handleClick = () => {
        socket.emit(NEW_ROOM, ROOM_ID);
        setRoom(ROOM_ID);
    }
    // {`${
    //     effect && "animate-wiggle"
    //   }  text-black font-bold text-base bg-secondary hover:bg-secondary-dark h-20 w-20 rounded-full shadow-lg`} 
    //   onAnimationEnd={() => setEffect(false)}
    return(
        
        <button onClick={handleClick} className="p-2 m-1 text-black break-normal no-text-wrap font-bold text-base bg-secondary hover:bg-secondary-dark h-20 w-20 rounded-full shadow-lg">
            
            {
                USERNAME 
            }
        </button>
    )
}

export default Peer;