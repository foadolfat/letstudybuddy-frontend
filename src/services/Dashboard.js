// var url = "http://localhost:5050"
var url = "https://letstudybuddy.herokuapp.com"
class Auth{
    async suggestions(){
        const user = JSON.parse(localStorage.getItem("user"));
        if(user && user.accessToken){
            let response = await fetch(`${url}/suggestions`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token':`${user.accessToken}`
                }
            })
            return await response.json();
        }
    }

    async addPeer(peer_id){
        const user = JSON.parse(localStorage.getItem("user"));
        if(user && user.accessToken){
            let response = await fetch(`${url}/peers`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token':`${user.accessToken}`
                },
                body: JSON.stringify({ 
                    peer_id: peer_id,
                    liked:true
                })
            })
            return await response.json();
        }
    }
}
export default Auth;