// var url = "http://localhost:5050"
var url = "https://letstudybuddy.herokuapp.com"
class Auth{
    async suggestions(setFetchInProgress){
        setFetchInProgress(true);
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
            if (response.status === 401) {
                localStorage.clear();
                window.open("/Auth","_self");
            }
            
            else {
                setFetchInProgress(false);
                return await response.json();
            }
        }
        else{
            localStorage.clear();
            window.open("/Auth","_self");
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
            if (response.status === 401) {
                localStorage.clear();
                window.open("/Auth","_self");
            }
            else return await response.json();
        }
        
    }
}
export default Auth;