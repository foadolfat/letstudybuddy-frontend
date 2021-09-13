import * as React from "react";
import Auth from "../../services/Auth";
import { trackPromise } from 'react-promise-tracker';
import Loader from "react-loader-spinner";

function SignUp({setUserCreated}){
    const[fetchInProgress, setFetchInProgress] = React.useState(false);
    const [newUser, setUser] = React.useState({u:"",p:"",f:"",l:"",e:"", g:"", c:""});
  
    const handleSubmit = (e) => {
        
        e.preventDefault();
        if(newUser.p !== newUser.c) alert("Passwords do not match!");
        else{
            const api = new Auth();
            trackPromise(
                api.signUp(newUser.u, newUser.p, newUser.e, newUser.f, newUser.l, newUser.g, setFetchInProgress).then((response) => {
                    alert(response.message);
                    setUserCreated(newUser.u);
                }).catch((reason) => {
                    console.log(reason);
                })  
            )
        }
    }

    return(
        <div className="flex justify-center m-2">
            
            {!fetchInProgress &&
                <form onSubmit={handleSubmit}>
                    <div className="bg-surface rounded-lg border shadow-lg  xxs:p-4 md:p-12 xxs:w-full md:w-full h-full relative ">
                        <div className="text-2xl text-black font-bold">Sign up:</div>
                        <div className="grid grid-cols-1 gap-1 field mt-12">
                            
                            <input  className="border-2 border-gray-300 bg-surface h-10 md:w-60 px-5 pr-14 rounded-lg text-sm text-black focus:outline-none"
                                type="text" name="fName" value = {newUser.f} placeholder="First Name" onChange={e => setUser(ev => ({
                                    ...ev,
                                    f : e.target.value,
                                }))}/>
                            <input  className="border-2 border-gray-300 bg-surface h-10 md:w-60 px-5 pr-14 rounded-lg text-sm text-black focus:outline-none"
                                type="text" name="lName" value = {newUser.l} placeholder="Last Name" onChange={e => setUser(ev => ({
                                    ...ev,
                                    l : e.target.value,
                                }))}/>
                            <input  className="border-2 border-gray-300 bg-surface h-10 md:w-60 px-5 pr-14 rounded-lg text-sm text-black focus:outline-none"
                                type="number" step="0.01" min="0" max="4" name="gpa" value = {newUser.g} placeholder="GPA" onChange={e => setUser(ev => ({
                                    ...ev,
                                    g : e.target.value,
                                }))}/>
                            <input required className="border-2 border-gray-300 bg-surface h-10 md:w-60 px-5 pr-14 rounded-lg text-sm text-black focus:outline-none"
                                type="email" name="email" value = {newUser.e} placeholder="Email" onChange={e => setUser(ev => ({
                                    ...ev,
                                    e : e.target.value,
                                }))}/>

                            <input required className="border-2 border-gray-300 bg-surface h-10 md:w-60 px-5 pr-14 rounded-lg text-sm text-black focus:outline-none"
                                type="text" name="username" value = {newUser.u} placeholder="Username" onChange={e => setUser(ev => ({
                                    ...ev,
                                    u : e.target.value,
                                }))}/>
                            <input required className="border-2 border-gray-300 bg-surface h-10 md:w-60 px-5 pr-14 rounded-lg text-sm text-black focus:outline-none"
                                type="password" name="pass" value = {newUser.p} placeholder="Password" onChange={e => setUser(ev => ({
                                    ...ev,
                                    p : e.target.value,
                                }))}/>

                            <input required className="border-2 border-gray-300 bg-surface h-10 md:w-60 px-5 pr-14 rounded-lg text-sm text-black focus:outline-none"
                                type="password" name="pass_2" value = {newUser.c} placeholder="Re enter password" onChange={e => setUser(ev => ({
                                    ...ev,
                                    c : e.target.value,
                                }))}/>
                            
                            
                            

                            
                            <button type="submit" className="border-gray-300 bg-secondary hover:bg-secondary-dark h-10 rounded-lg text-sm focus:outline-none inset-x-center signupbuttonmargin md:w-60 text-white font-bold" >
                                Sign up
                            </button>
                            
                        </div>
                    
                    
                        
                    </div>

                </form>
            }
            {fetchInProgress && 
                <Loader type="ThreeDots" color="bg-secondary" height="100" width="100" />
            }

        </div>

    )

}
export default SignUp;