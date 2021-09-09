import * as React from "react"
import socket from "../../services/SocketService"
import Notifications from "../../services/Notifications";

const NEW_ROOM = "new-room-event"; 

const NEW_MESSAGE_ALERT = "new-message-alert";
const NEW_PEER = "new_peer_event";

function Peer({notifications, room, USERNAME, PEER_ID, ROOM_ID, setRoom, setNotification}){
    const [currentRoom, setCurrentRoom] = React.useState(false);
    const [newPeer, setNewPeer] = React.useState(false)
    const [newMessageAlert, setNewMessageAlert] = React.useState(false)

    React.useEffect(() => {
        

        if(ROOM_ID && notifications && notifications.length){
            for(let notification of notifications){
                if(notification.ROOM_ID === ROOM_ID && notification.EVENT_KEY === NEW_MESSAGE_ALERT){
                    setNotification(true);
                    setNewMessageAlert(true);
                    break;
                } else if(notification.ROOM_ID === ROOM_ID && notification.EVENT_KEY === NEW_PEER){
                    setNotification(true);
                    setNewPeer(true);
                    
                }
            }
        }

        
        
    },[notifications])

    React.useEffect(() => {
        
        socket.on(NEW_MESSAGE_ALERT, (intendedRoom) => {
            setNotification(true);
            console.log("recieved a notification");

            if(intendedRoom === ROOM_ID ){
                
                setNewMessageAlert(true);
            }
                

        })
        return () => {
            socket.off(NEW_MESSAGE_ALERT);
          };
        
        
    },[])



    React.useEffect(()=>{
        if(ROOM_ID === room) {
            setCurrentRoom(true);
            setNewMessageAlert(false);
            setNewPeer(false);
            
        }
        else setCurrentRoom(false);
        
        
    },[room])

    const deleteNotifications = () => {

        let mounted = true;
        if(mounted){  
        const api = new Notifications();
                    api.deleteNotificationsByRoom(ROOM_ID).then((response) => {
                        console.log(response)
                    }).catch((reason => {console.log(reason)}));
        }
        return () => mounted = false;
    }
    
    const handleClick = () => {
        deleteNotifications();

        socket.emit(NEW_ROOM, ROOM_ID);
        setRoom(ROOM_ID);

    }

    return(
        
        <div className="">
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

            {!currentRoom && newPeer &&

                <button onClick={handleClick}
                
                    className="p-2 m-1 text-black break-normal
                    font-bold 
                    bg-red-400 hover:bg-red-500 text-base
                    h-20 w-20 rounded-full shadow-lg
                    focus:ring-2 focus:ring-offset-2
                    focus:ring-primary-dark duration-500">
                        
                    <span className="animate-ping flex items-center justify-center h-full w-full rounded-full bg-red-400 
                                hover:animate-none opacity-100">
                        <div className="">
                        NEW MATCH
                        </div>
                    </span>
                    
                    
                </button>
                
            }
            {!currentRoom && newMessageAlert && !newPeer &&
                <button onClick={handleClick}
                        className="p-2 m-1 text-black break-normal 
                        no-text-wrap font-bold text-base animate-bounce
                        bg-blue-400 hover:bg-blue-500 
                        h-20 w-20 rounded-full shadow-lg
                        focus:ring-2 focus:ring-offset-2 
                        focus:ring-primary-dark duration-500">
                    
                    {
                        USERNAME
                    }
                </button>
            }
            {!currentRoom && !newMessageAlert && !newPeer &&
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