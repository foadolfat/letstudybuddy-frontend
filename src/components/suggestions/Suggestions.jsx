import * as React from "react";
import TinderCard from 'react-tinder-card'
import Suggestion from "./Suggestion";
import Dashboard from "../../services/Dashboard";
import socket from "../../services/SocketService";
import { ReactComponent as CAT } from "../../assets/pictures/cat.svg"
import Loader from "react-loader-spinner";
const NEW_PEER = "new_peer_event";

function Suggestions(){
    const[fetchInProgress, setFetchInProgress] = React.useState(false);
    const [peerSuggestions, setSuggestions] = React.useState([]);

    React.useEffect(() => {
        let mounted = true;
        if(mounted){
            const api = new Dashboard();
            api.suggestions(setFetchInProgress).then((suggs) => {
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
                {!fetchInProgress && 
                    <div className="flex  items-center justify-center overflow-hidden ">
                        {peerSuggestions && peerSuggestions.length>0 && peerSuggestions.map((peers, index) =>
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
                        {!peerSuggestions.length==1 && 
                        <div className=" flex flex-col shadow-lg ">
                            <div className="flex flex-col bg-gray-200 text-gray-800 rounded-lg text-xl font-bold
            
                                        xxs:p-4 lg:p-8 
            
            
                                        2xl:w-500 2xl:h-500
                                        xl:w-500 xl:h-500  
                                        lg:w-500 lg:h-500  
                                        md:w-350 md:h-500  
                                        sm:w-350 sm:h-450  
                                        xs:w-350 xs:h-450
                                        xxs:w-250 xxs:h-400">
                                            
                                No Suggestions :(
                                <CAT/>
                                Adding more classes in your profile can lead to more suggestions
                            </div>
                        </div>
                        }
                    </div>
                }
                {fetchInProgress&&
                    <Loader type="ThreeDots" color="bg-secondary" height="100" width="100" />
                }
            </div>
        </div>

      )

}

export default Suggestions;