// var url = "http://localhost:5050"
var url = "https://letstudybuddy.herokuapp.com/"
class Messages{

    async getMessages(room_id){
        const user = JSON.parse(localStorage.getItem("user"));
        if(user && user.accessToken){
            let response = await fetch(`${url}/messages/room`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token':`${user.accessToken}`
                },
                body: JSON.stringify({ 
                    room_id:room_id
                })
            })
            const result = await response.json();
            return result;
        }
    }
}
export default Messages