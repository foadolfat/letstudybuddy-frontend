import * as React from "react";
import Auth from "../../services/Auth";
import { trackPromise } from 'react-promise-tracker';
import Loader from "react-loader-spinner";


function Login({userCreated}){
    const[fetchInProgress, setFetchInProgress] = React.useState(false);
    const usernameRef = React.useRef();
	const passwordRef = React.useRef();
    React.useEffect(() => {
        if(userCreated) usernameRef.current.value = userCreated;
        
	}, [userCreated]);

    const handleSubmit = (e) => {

        e.preventDefault();
        const api = new Auth();
        trackPromise(
            api.signIn(usernameRef.current.value, passwordRef.current.value, setFetchInProgress).then(() => {
            const user = JSON.parse(localStorage.getItem("user"));
            if(user && user.accessToken) {
                alert("Authorized!");
                window.open("/Profile","_self");
            }
            else {
                alert("Not Authorized!");
                localStorage.clear();
            }
            }).catch((reason) => {
                console.log(reason);
            })
        )
    }
    
    return(
       
            <div className="flex justify-center m-2">
                {!fetchInProgress && 
                    <form onSubmit={handleSubmit}>

                        <div className="bg-white rounded-lg border shadow-lg  xxs:p-4 md:p-12 xxs:w-full md:w-full h-full relative ">
                            <div className="text-2xl text-black font-bold ">Sign in:</div>
                            <div className="grid grid-cols-1 gap-1 field mt-12">

                                <input required className="border-2 border-gray-300 bg-white px-5 pr-14 h-10 md:w-60 rounded-lg text-sm text-black focus:outline-none"
                                    type="text" name="username"  placeholder="Username" ref={usernameRef}/>

                                <input required className="border-2 border-gray-300 bg-white px-5 pr-14 h-10 md:w-60 rounded-lg text-sm text-black focus:outline-none"
                                    type="password" name="pass"  placeholder="Password" ref={passwordRef }/>
                                
                                <button type="submit" className=" border-gray-300  bg-secondary hover:bg-secondary-dark h-10 rounded-lg text-sm focus:outline-none inset-x-center signinbuttonmargin md:w-60 text-white font-bold" >
                                    Sign in
                                </button>
                            </div>
                        
                        
                            
                        </div>
                        

                    </form>
                }
                {fetchInProgress&&
                    <Loader type="ThreeDots" color="bg-secondary" height="100" width="100" />
                }

            </div>
  
        

    )

}
export default Login;



// <input required className="border-2 border-gray-300 bg-white px-5 pr-14 h-10 w-60 rounded-lg text-sm text-black focus:outline-none"
//                                 type="text" name="username" value = {newUser.u} placeholder="Username" onChange={e => setUser(ev => ({
//                                     ...ev,
//                                     u : e.target.value,
//                                     }))}/>

//                             <input required className="border-2 border-gray-300 bg-white px-5 pr-14 h-10 w-60 rounded-lg text-sm text-black focus:outline-none"
//                                 type="text" name="pass" value = {newUser.p} placeholder="Password" onChange={e => setUser(ev => ({
//                                     ...ev,
//                                     p : e.target.value,
//                                     }))}/>