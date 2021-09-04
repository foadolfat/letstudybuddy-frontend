//var url = "http://localhost:5050"
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
                if (response.status === 401) {
                    localStorage.clear();
                    window.open("/Auth","_self");
                }
                else return await response.json();
            }
            
        }
}
export default PeerClasses;