import * as React from "react";
import TinderCard from 'react-tinder-card'
import Suggestion from "./Suggestion";
import Dashboard from "../../services/Dashboard";

function Suggestions(){
    const [peerSuggestions, setSuggestions] = React.useState();
    React.useEffect(() => {
        const api = new Dashboard();
        api.suggestions().then((suggs) => {
            setSuggestions(suggs);
        }).catch((reason => {console.log(reason)}))
    },[]);

    const onSwipe = (direction, peer_id) => {
        if(direction==="right"){
            const api = new Dashboard();
            api.addPeer(peer_id);
        }
        console.log('You swiped: ' + direction)
    }
      
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
 
        <div className=" flex flex-col items-center justify-center overflow-hidden">
            <div className="flex  items-center justify-center overflow-hidden">
                {peerSuggestions && peerSuggestions.length && peerSuggestions.map((peers, index) =>
                    <TinderCard className="absolute overflow-hidden" key={peers.username} onSwipe={(dir) => onSwipe(dir, peers.peer_id)} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}>

                        <Suggestion name={peers.username} peer_id={peers.peer_id} />

                    </TinderCard>
                )}
            </div>
        </div>

      )

}

export default Suggestions;