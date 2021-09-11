// var url = "http://localhost:5050"
var url = "https://letstudybuddy.herokuapp.com"
class Auth{
    async signIn(u, p, setFetchInProgress){
        if(u!=='' && p!==''){
            setFetchInProgress(true);
            await fetch(`${url}/signin`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    username: u,
                    password: p
                })
            }).then(response => response.json()).then(data => {
                setFetchInProgress(false);
                localStorage.setItem("user", JSON.stringify(data));
                localStorage.setItem("chat", JSON.stringify({"name":u}));
            })
        }
    }

    async signUp(u, p, e, f, l, g, setFetchInProgress){
        if(u!=='' && p!=='' && e!==''){
            setFetchInProgress(true);
            let response = await fetch(`${url}/user`, {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    username: u,
                    password: p,
                    fName:f,
                    lName:l,
                    email:e,
                    gpa:g
                })
            })

            setFetchInProgress(false);
            console.log(response.status);
            return await response.json();
          
        }
        return {message:"No input!"};
    }
}
export default Auth;