// var url = "http://localhost:5050"
var url = "https://letstudybuddy.herokuapp.com/"

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
                var result = await response.json();
                //console.log(result)
                return await result;
            }
        }
}
export default Peers;