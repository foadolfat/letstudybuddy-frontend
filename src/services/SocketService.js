import io from "socket.io-client";
const user = JSON.parse(localStorage.getItem("user"));
let token='';
let socket='';
if(user && user.accessToken){
  token = user.accessToken;
  socket = io("https://letstudybuddy.herokuapp.com", {
    auth: {token}
  });
}
//http://localhost:5050 https://letstudybuddy.herokuapp.com
export default socket;