import io from "socket.io-client";
const user = JSON.parse(localStorage.getItem("user"));
let token='';
let socket='';
if(user && user.accessToken){
  token = user.accessToken;
  socket = io("http://localhost:3030", {
    auth: {token}
  });
}

export default socket;