var url = "http://localhost:5050"
class Profile{

    async getUser(){
        const user = JSON.parse(localStorage.getItem("user"));
        if(user && user.accessToken){
            let response = await fetch(`${url}/user`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token':`${user.accessToken}`
                }
            })
            return await response.json();
        }
    }

    async updateUser(fName, lName, major){
        const user = JSON.parse(localStorage.getItem("user"));
        if(user && user.accessToken){
            let response = await fetch(`${url}/user`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token':`${user.accessToken}`
                },
                body: JSON.stringify({ 
                    fName: fName,
                    lName: lName,
                    major: major
                })
            })
            return await response.json();
        }
    }

    async addClasses(c, s, p){
        const user = JSON.parse(localStorage.getItem("user"));
        if(c!=='' && s!=='' && p!==''){
            let response = await fetch(`${url}/classes`, {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token':`${user.accessToken}`
                },
                body: JSON.stringify({ 
                    class_name: c,
                    school: s,
                    prof:p
                })
            })

            console.log(response.status);
            return await response.json();
          
        }
        return {message:"No input!"};
    }

    async deleteClass(c, s){
        const user = JSON.parse(localStorage.getItem("user"));
        if(c!=='' && s!==''){
            let response = await fetch(`${url}/classes`, {
                method: 'DELETE',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token':`${user.accessToken}`
                },
                body: JSON.stringify({ 
                    class_name: c,
                    school: s
                })
            })

            console.log(response.status);
            return await response.json();
          
        }
        return {message:"No input!"};
    }

    async getClasses(){
        const user = JSON.parse(localStorage.getItem("user"));
        if(user && user.accessToken){
            let response = await fetch(`${url}/classes`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token':`${user.accessToken}`
                }
            })
            return await response.json();
        }
    }
}
export default Profile;