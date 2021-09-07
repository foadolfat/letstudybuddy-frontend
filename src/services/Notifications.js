// var url = "http://localhost:5050"
var url = "https://letstudybuddy.herokuapp.com"
class Notifications{

    async getNotificationsByUser(){
        const user = JSON.parse(localStorage.getItem("user"));
        if(user && user.accessToken){
            let response = await fetch(`${url}/notificationByUser`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token':`${user.accessToken}`
                }
            })
            const results = await response.json();
            //console.log(result)
            return results;
        }
        
    }
    async deletetNotificationsByUser(){
        const user = JSON.parse(localStorage.getItem("user"));
        if(user && user.accessToken){
            let response = await fetch(`${url}/notificationByUser`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token':`${user.accessToken}`
                }
            })
            const results = await response.json();
            //console.log(result)
            return results;
        }
        
    }
    async deleteNotificationsByRoom(ROOM_ID){
        const user = JSON.parse(localStorage.getItem("user"));
        
        if(user && user.accessToken){
            
            let response = await fetch(`${url}/notificationByRoom/${ROOM_ID}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token':`${user.accessToken}`
                }
            })

            const results = await response.json();

            return results;
        }
        
    }


    
}
export default Notifications;