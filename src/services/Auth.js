var url = "http://localhost:5050"
class Auth{
    async signIn(u, p){
        if(u!=='' && p!==''){
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
                console.log(data)
                localStorage.setItem("user", JSON.stringify(data));
            })
        }
    }

    async signUp(u, p, e, f, l){
        if(u!=='' && p!=='' && e!=='' && f!=='' && l!==''){
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
                    email:e
                })
            })

            console.log(response.status);
            return await response.json();
          
        }
        return {message:"No input!"};
    }
}
export default Auth;