import * as React from "react";
import Peers from "../../services/Peers.js";
import Peer from "./Peer.jsx";
import socket from "../../services/SocketService"
import Notifications from "../../services/Notifications";
const NEW_PEER = "new_peer_event";
function PeersDash({room, setRoom}){
    const [peersList, setPeers] = React.useState();
    //const [newPeer, setNewPeer] = React.useState(false);
    const [notifications, setNotiications] = React.useState([]);
    React.useEffect(()=>{
        console.log("notifications recieved in peerdash",notifications)
        let mounted = true;
        if(mounted){    
            const api = new Notifications();
            api.getNotificationsByUser().then((response)=>{
                //console.log(response.notifications);
                setNotiications(response.notifications)
            }).catch((reason)=>{console.log(reason)});}
        return () => mounted = false;
    },[peersList])

    React.useEffect(() => {
        let mounted = true;

        
        console.log("here")
        if(mounted){
            socket.on(NEW_PEER, () => {
                const api = new Peers();
                async function fetchData () {
                    await api.getPeers().then((peers) => {
                    // console.log(peers.peers[0].USERNAME)
                    //alert("New Match.")
                    setPeers(peers.peers);
                    console.log("setting peers")
                }).catch((reason => {console.log(reason)}))}

                fetchData();
            })}
        return () => {
            mounted = false;
            socket.off(NEW_PEER);
          };
    },[peersList]);
    React.useEffect( () => {
        let mounted = true;
        if(mounted){    
            const api = new Peers();
            async function fetchData () {await api.getPeers().then((peers) => {
                // console.log(peers.peers[0].USERNAME)
                setPeers(peers.peers);
                console.log("setting peers for first time")
            }).catch((reason => {console.log(reason)}))}

            fetchData();}
        return () => mounted = false;
    }, []);
    
    return(
        <div className=" h-full w-full flex flex-wrap overflow-auto ">
            {
                peersList && peersList.length && peersList.map((peer, index) => <Peer notifications={notifications} room={room} key={index} setRoom={setRoom} USERNAME={peer.USERNAME} PEER_ID={peer.PEER_ID} ROOM_ID={peer.ROOM_ID}/> )
            }
        </div>
    )
}

export default PeersDash;