import React from "react";
import { Resizable } from "re-resizable";
import PeersDash from "./PeersDash";
import socket from "../../services/SocketService"
import Message from "./Message";
import Messages from "../../services/Messages";


const NEW_MESSAGE_EVENT = "new-message-event";


let u = '';

function Chat({setNotification}){

    const [messages, setMessages] = React.useState({content:'', username:'', date_sent:''});
    const [room, setRoom] = React.useState();
    
   
    const contentRef = React.useRef();



    React.useEffect(()=>{
        let mounted = true;
        socket.on(NEW_MESSAGE_EVENT, (data, intendedRoom) => {
            
            if(mounted && intendedRoom === room ) {
                if(messages && messages.length) setMessages([...messages, data]);
                else setMessages([data]);
            }

        })
        
        
        return () => {
            socket.off(NEW_MESSAGE_EVENT);
            mounted = false;
          };
    },[messages])
    
    React.useEffect(() => {
        let mounted = true;
        if(mounted) {    
            const chat = JSON.parse(localStorage.getItem("chat"));
            if(chat && chat.name ) u = chat.name;
            if(room){
                const api = new Messages();
                api.getMessages(room).then((response) => {
                    setMessages(response.messages);
                }).catch((reason => {console.log(reason)}))
            }}
        return () => mounted = false;
    }, [room]);

    const handleClick = () => {

        if(contentRef.current.value !== '' && /\S/.test(contentRef.current.value)) {
            let data = {
                content:contentRef.current.value,
                username:u,
                date:''
            }
            
            socket.emit(NEW_MESSAGE_EVENT, data, room);
            contentRef.current.value = "";

            
        }
    }

    const handleKeypress = e => {

      if (e.key === "Enter") {
        handleClick();
      }
    };


    return(

        <Resizable
            defaultSize={{
                width:300,
                height:"90vh",
            }}
            minWidth={300}
            maxWidth={"50vw"}
            enable={{
                top:false,
                right:true,
                left:false,
                bottom:false,
            }}
        >
            <div className="flex flex-col chat text-on-primary text-xl font-bold">
                
                <Resizable
                    minHeight={200}
                    maxHeight={"70vh"}
                    bounds="parent"
                    enable={{
                        top:false,
                        right:false,
                        left:false,
                        bottom:true,
                    }}
                >
                <div className="flex flex-col w-full h-full text-black bg-primary rounded-md shadow-lg p-4 space-y-2 justify-between">
                    {/* <div className="bg-white break-words overflow-auto h-full resize-none focus:outline-none p-2 rounded-md">{messages && messages}</div> */}

                    {room && 
                        <div className="flex flex-col h-full space-y-2">
                            <div className="bg-white break-words overflow-auto h-full resize-none focus:outline-none p-2 rounded-md">
                                { messages && messages.length && messages.map((message, index) => {
                                    return <Message key={index} content={message.content} username={message.username} date={message.date_sent} message_user_id={message.user_id}/>
                                })}
                                <AlwaysScrollToBottom />
                            </div>
                            <div className="flex space-x-2">
                                <input ref={contentRef} onKeyPress={handleKeypress} type="text" placeholder="Enter message" className="w-full h-5 text-base shadow-lg p-4 bg-background rounded-md focus:outline-none text-black"/>
                                <button onClick={handleClick} className="rounded-md w-1/4 text-on-secondary bg-secondary hover:bg-secondary-dark">Send</button>
                            </div>
                        </div>
                    }
                </div>
        
                </Resizable>
                <div className="flex flex-col flex-grow-1 friends h-full w-full bg-primary rounded-md shadow-lg mt-2 p-4 justify-between">
                    <PeersDash setNotification={setNotification}  room= {room} setRoom={setRoom}/>
                    
                    {/* <input type="search" placeholder="Search name or email" className="flex flex-col w-full h-5 text-base rounded-sm shadow-lg p-4 bg-background focus:outline-none"/> */}
                    </div>
        
            </div>
        </Resizable>

    
    )
}

const AlwaysScrollToBottom = () => {
    const elementRef = React.useRef();
    React.useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

export default Chat