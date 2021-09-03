// var url = "http://localhost:5050"
var url = "https://letstudybuddy.herokuapp.com"

class PeerClasses{
    async getPeerClasses(peer_id){
            const user = JSON.parse(localStorage.getItem("user"));
            if(user && user.accessToken){
                let response = await fetch(`${url}/peer_classes/${peer_id}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'x-access-token':`${user.accessToken}`
                    }
                })
                var result = await response.json();
                //console.log(result)
                return await result;
            }
            
        }
}
export default PeerClasses;