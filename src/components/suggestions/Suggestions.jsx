import * as React from "react";
import TinderCard from 'react-tinder-card'
import Suggestion from "./Suggestion";
import Dashboard from "../../services/Dashboard";
import socket from "../../services/SocketService"
const NEW_PEER = "new_peer_event";

function Suggestions(){
    const [peerSuggestions, setSuggestions] = React.useState();

    React.useEffect(() => {
        let mounted = true;
        if(mounted){
            const api = new Dashboard();
            api.suggestions().then((suggs) => {
                setSuggestions(suggs);
            }).catch((reason => {console.log(reason)}))}
        return () => mounted = false;
    },[]);

    const onSwipe = (direction, peer_id) => {
        //let mounted = true;
        //if(mounted){
            if(direction==="right"){
            const api = new Dashboard();
            async function fetchData () {
                await api.addPeer(peer_id).then(() => {console.log("addPeer should be finished by now")} )
                        .then(() => {socket.emit(NEW_PEER, peer_id)});
            }
            fetchData()
            
        }
        //}
        //return () => mounted = false;
        
        //console.log('You swiped: ' + direction)
    }
      
    const onCardLeftScreen = (myIdentifier) => {
        //console.log(myIdentifier + ' left the screen')
    }

    return (
 
        <div className="transform transition duration-500 hover:scale-110">
            <div className=" flex flex-col items-center justify-center overflow-hidden ">
                <div className="flex  items-center justify-center overflow-hidden ">
                    {peerSuggestions && peerSuggestions.length && peerSuggestions.map((peers, index) =>
                        <TinderCard className="absolute overflow-hidden " key={peers.username} onSwipe={(dir) => onSwipe(dir, peers.peer_id)} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}>
                            <Suggestion fname={peers.fname} 
                                        major={peers.major} 
                                        degree={peers.degree} 
                                        lname={peers.lname} 
                                        username={peers.username} 
                                        peer_id={peers.peer_id} 
                                        gpa={peers.gpa}
                                        email={peers.EMAIL}/>
                        </TinderCard>
                    )}
                </div>
            </div>
        </div>

      )

}

export default Suggestions;