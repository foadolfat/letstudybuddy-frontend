// var url = "http://localhost:5050"
var url = "https://letstudybuddy.herokuapp.com"
class Profile{

    async getUser(setFetchUserInProgress){
        setFetchUserInProgress(true);
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
            const result = await response.json();
            setFetchUserInProgress(false);
            //console.log(result)
            return result;
        }
        
    }


    async updateUser(username, fName, lName, major, degree, gpa){
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
                    username: username,
                    fName: fName,
                    lName: lName,
                    major: major,
                    degree: degree,
                    gpa: gpa
                })
            })
            if (response.status === 401) {
                localStorage.clear();
                window.open("/Auth","_self");
            }
            else return await response.json();
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
                    class_name: c.replace(/[^0-9a-z]/gi, '').toUpperCase() ,
                    school: s.replace(/[^0-9a-z]/gi, '').toUpperCase() ,
                    prof: p.replace(/[^0-9a-z]/gi, '').toUpperCase() 
                })
            })

            if (response.status === 401) {
                localStorage.clear();
                window.open("/Auth","_self");
            }
            else return await response.json();
          
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
                    class_name: c.replace(/[^0-9a-z]/gi, '').toUpperCase(),
                    school: s.replace(/[^0-9a-z]/gi, '').toUpperCase()
                })
            })

            if (response.status === 401) {
                localStorage.clear();
                window.open("/Auth","_self");
            }
            else return await response.json();
          
        }
        return {message:"No input!"};
    }

    async getClasses(setFetchClassInProgress){
        setFetchClassInProgress(true);
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
            if (response.status === 401) {
                localStorage.clear();
                window.open("/Auth","_self");
            }
            else {
                setFetchClassInProgress(false);
                return await response.json();
            }
        }
        
    }
}
export default Profile;