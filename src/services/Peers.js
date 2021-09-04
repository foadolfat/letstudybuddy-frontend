//var url = "http://localhost:5050"
var url = "https://letstudybuddy.herokuapp.com"

class Peers{
    async getPeers(){
            const user = JSON.parse(localStorage.getItem("user"));
            if(user && user.accessToken){
                let response = await fetch(`${url}/peers`, {
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
export default Peers;