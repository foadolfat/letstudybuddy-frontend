import * as React from "react"
import GPA from "../../assets/icons/GPA.jsx"
import Profile from "../../services/Profile.js";

import ClassesDashV2 from "../classes/ClassesDashV2.jsx";
import {ReactComponent as EDIT} from "../../assets/icons/edit_solid.svg"
import {ReactComponent as SAVE} from "../../assets/icons/check_solid.svg"
import { useSpring, animated } from 'react-spring'



function UserCardV2(){
    const [user, setUser] = React.useState({});
    const [classes, setClasses] = React.useState([]);

    const [nameEdit, setNameEdit] = React.useState(false);
    const [majorEdit, setMajorEdit] = React.useState(false);
    const [degreeEdit, setDegreeEdit] = React.useState(false);
    const [gpaEdit, setGPAEdit] = React.useState(false);
    const [usernameEdit, setUsernameEdit] = React.useState(false);

    const [updateHappened, setUpdateHappened] = React.useState(false);
    const [addClassesActive, setAddClassActive] = React.useState(false)
    const [classesExist, setClassesExist] = React.useState(false);
    const [classUpdated, setClassUpdated] = React.useState(false);

    const nameRef = React.useRef();
    const majorRef = React.useRef();
    const degreeRef = React.useRef();
    const gpaRef = React.useRef();
    const usernameRef = React.useRef();

    const classNameRef = React.useRef();
    const profRef = React.useRef();
    const schoolRef = React.useRef();

    const addClassSlide = useSpring({
        transform: addClassesActive ? `translate3d(0,-150%,0)` : `translate3d(0,50%,0)`,

    })

    const handleAddClass = () => {
        if(addClassesActive){
            if(classNameRef.current.value === '' || profRef.current.value === '' || schoolRef.current.value === '') alert("All fields must be filled to add a class");
            else{
                const api = new Profile();
                api.addClasses(classNameRef.current.value, schoolRef.current.value, profRef.current.value ).then((response) => {
                    if(!response.code) {
                        setClassUpdated(!classUpdated);
                    }
                });
            }
            

        }
        setAddClassActive(!addClassesActive);
    }
        

    const handleUsernameChange = () => {
        const api = new Profile();
        if(usernameRef.current.value === '' && user && user.USERNAME) usernameRef.current.value = user.USERNAME;
        api.updateUser(usernameRef.current.value, user.FNAME, user.LNAME, user.MAJOR, user.DEGREE, user.GPA).then((response) => {
            if(!response.code) {
                setUpdateHappened(!updateHappened);
            }
        });
    }

    const handleNameChange = () => {

        if(nameRef.current.value === '' && user && user.FNAME && user.LNAME) nameRef.current.value = user.FNAME + " " + user.LNAME;
        const firstName = nameRef.current.value.substr(0,nameRef.current.value.indexOf(' '));
        const lastName = nameRef.current.value.substr(nameRef.current.value.indexOf(' ')+1);

        const api = new Profile();
        api.updateUser(user.USERNAME, firstName, lastName, user.MAJOR, user.DEGREE, user.GPA).then((response) => {
            if(!response.code) setUpdateHappened(!updateHappened)
        });
    }

    const handleMajorChange = () => {
        const api = new Profile();
        if(majorRef.current.value === '' && user && user.MAJOR) majorRef.current.value = user.MAJOR;
        api.updateUser(user.USERNAME, user.FNAME, user.LNAME, majorRef.current.value, user.DEGREE, user.GPA).then((response) => {
            if(!response.code) setUpdateHappened(!updateHappened)
        });
    }

    const handleDegreeChange = () => {
        const api = new Profile();
        if(degreeRef.current.value === '' && user && user.DEGREE) degreeRef.current.value = user.DEGREE;
        api.updateUser(user.USERNAME, user.FNAME, user.LNAME, user.MAJOR, degreeRef.current.value, user.GPA).then((response) => {
            if(!response.code) setUpdateHappened(!updateHappened)
        });
    }

    const handleGPAChange = () => {
        const api = new Profile();
        if(gpaRef.current.value === '' && user && user.GPA) gpaRef.current.value = user.GPA;
        api.updateUser(user.USERNAME, user.FNAME, user.LNAME, user.MAJOR, user.DEGREE, gpaRef.current.value).then((response) => {
            if(!response.code) setUpdateHappened(!updateHappened)
        });
    }

    React.useEffect(() => {
        let mounted = true;
        const api = new Profile();
        if(mounted){
            api.getClasses().then((response) => {
                console.log(response);
                if(response.code) setClassesExist(false);
                else {
                    setClassesExist(true);
                    setClasses(response.classes);
                }
            })
        }
        return () => mounted = false;
    }, [classUpdated]);

    React.useEffect(() => {
        let mounted = true;
        const api = new Profile();
        if(mounted){
            api.getUser().then((user) => {
                setUser(user);
                localStorage.setItem("chat", JSON.stringify({"name":user.USERNAME}));
            }).catch((reason => {console.log(reason)}))
        }
        return () => mounted = false;
    },[updateHappened]);
    

    return(

        <div className=" flex flex-col shadow-lg overflow-hidden">
            
            <div className="bg-primary-light rounded-t-lg 
                            2xl:w-30v 2xl:h-300 
                            xl:w-40v xl:h-250  
                            lg:w-50v lg:h-250  
                            md:w-50v md:h-250  
                            sm:w-65v sm:h-200  
                            xs:w-70v xs:h-200">
                <img className="object-cover rounded-t-lg w-full h-full" 
                src="https://mymindmybody.net/wp-content/uploads/2018/12/Work-in-Progress-1024x1024.png" alt={"profilepic"}/>
            </div>
            <div className=" bg-gray-200 xs:p-4 text-gray-800 rounded-b-lg 
                            xs:space-y-8 
                            sm:space-y-10 
                            md:space-y-20 
                            lg:space-y-4 

                            2xl:w-30v 2xl:h-400      
                            xl:w-40v xl:h-400  
                            lg:w-50v lg:h-400  
                            md:w-50v md:h-400  
                            sm:w-65v sm:h-350  
                            xs:w-70v xs:h-350">
           

                <div className="flex justify-between ">
                    <div className="text-sm font-bold text-gray-400 lg:space-y-12 xs:space-y-2 w-200">
                        <div className="xl:space-y-4">
                            <span className="">
                                Username:
                            </span>
                            {!usernameEdit &&
                            <div className="flex lg:text-xl font-bold text-gray-800 ">
                                <button className="edit-button" onClick={() => setUsernameEdit(!usernameEdit)}><EDIT/></button>
                                {user.USERNAME}
                            </div>}
                            {usernameEdit &&
                            <div className="flex lg:text-xl font-bold text-gray-800">
                                <button className="edit-button" onClick={() => {setUsernameEdit(!usernameEdit); handleUsernameChange();}}><SAVE/></button>
                                <input ref={usernameRef} placeholder="Enter username:" className="w-full outline-none focus:outline-none rounded-md shadow-md"></input>
                            </div>}
                        </div>
                        

                        <div> 
                            <span>Major:</span>
                            {!majorEdit && 
                            <div className="flex lg:text-xl font-bold text-gray-800 ">
                                <button className="edit-button" onClick={() => setMajorEdit(!majorEdit)}><EDIT/></button>
                                {user.MAJOR}
                            </div>}
                            {majorEdit && 
                            <div className="flex lg:text-xl font-bold text-gray-800">
                                <button className="edit-button" onClick={() => {setMajorEdit(!majorEdit); handleMajorChange();}}><SAVE/></button>
                                <input ref={majorRef} placeholder="Enter major:" className="w-full outline-none focus:outline-none rounded-md shadow-md"></input>
                            </div>}
                        </div>
                        
                    </div>
                    <div className="text-sm font-bold text-gray-400 lg:space-y-12 xs:space-y-2 w-200">
                        
                        <div className="xl:space-y-4">
                            <span>Name:</span>
                            {!nameEdit &&
                            <div className="flex lg:text-xl font-bold text-gray-800 ">
                                <button className="edit-button" onClick={() => setNameEdit(!nameEdit)}><EDIT/></button>
                                <div>
                                    {user.FNAME} {user.LNAME}
                                </div>
                            </div>}
                            {nameEdit &&
                            <div className="flex lg:text-xl font-bold text-gray-800 ">
                                <button className="edit-button" onClick={() => {setNameEdit(!nameEdit); handleNameChange();}}><SAVE/></button>
                                <input ref={nameRef} placeholder="Enter name:" className="w-full outline-none focus:outline-none rounded-md shadow-md"></input>
                            </div>}
                        </div>


                        <div>
                            <span>Degree:</span>
                            {!degreeEdit && 
                            <div className="flex lg:text-xl font-bold text-gray-800">
                                <button className="edit-button" onClick={() => setDegreeEdit(!degreeEdit)}><EDIT/></button>
                                {user.DEGREE}
                            </div>}
                            {degreeEdit && 
                            <div className="flex text-xl font-bold text-gray-800">
                                <button className="edit-button" onClick={() => {setDegreeEdit(!degreeEdit); handleDegreeChange();}}><SAVE/></button>
                                <input ref={degreeRef} placeholder="Enter degree:" className="w-full outline-none focus:outline-none rounded-md shadow-md"></input>
                            </div>}
                        </div>
                        
                    </div>

                    {!gpaEdit &&  
                    <div className="w-1/5 text-sm font-bold text-gray-400">
                        <span className="flex">
                            <button className="edit-button " onClick={() => setGPAEdit(!gpaEdit)}><EDIT/></button>
                            GPA:
                        </span>
                        {user.GPA>0 && <GPA percentage={(user.GPA/4)*100} speed={20} strokeColor={"green"}/>}
                    </div>}
                    {gpaEdit &&  
                    <div className="flex flex-col w-1/4 text-sm font-bold text-gray-400">
                        <div className="flex">
                            <button className="edit-button " onClick={() => {setGPAEdit(!gpaEdit); handleGPAChange();}}><SAVE/></button>
                            <input ref={gpaRef} placeholder="GPA:" type="number" step="0.01" min="0" max="4" className="w-1/2 outline-none focus:outline-none rounded-md shadow-md"></input>
                        </div>
                    </div>}
                </div>

                <div className="text-lg font-bold text-gray-400">
                    <div>
                        Your classes:
                    </div>
                    <div className="flex space-x-4 mt-4 overflow-auto ">
                        <button className="w-40 bg-primary-light hover:bg-primary text-on-primary-light rounded-lg shadow-lg p-6 text-xl font-bold text-gray-800" 
                                onClick = {() => handleAddClass()}> 
                            {!addClassesActive && <span className="w-full text-base">Add Class</span>}
                            {addClassesActive && <span className="w-full text-base">Finish Adding</span>}
                        </button>
                        {classesExist && classes.map((c, index) =>  { 
                              return <ClassesDashV2
                                        key={c.user_d + c.class_name}
                                        setClassUpdated={setClassUpdated}
                                        classUpdated={classUpdated}
                                        user_id={c.USER_ID}
                                        class_name={c.CLASS_NAME}
                                        school={c.SCHOOL}
                                        expected_end={c.EXPECTED_END}
                                        prof={c.PROF}/>
                          })}
                    </div>
                </div>

                <animated.div className="bg-secondary h-full w-full rounded-lg shadow-lg flex flex-col space-y-2 justify-center items-center " style={addClassSlide}>
                    <div>
                        <div className="text-gray-700 font-bold">Class Name</div>
                        <input ref={classNameRef} required className="rounded-md shadow-md w-full text-base font-bold p-2 outline-none focus:outline-none" placeholder="Enter Class Name"/>
                    </div>

                    <div>
                        <div className="text-gray-700 font-bold">Professor</div>
                        <input ref={profRef} required className="rounded-md shadow-md w-full text-base font-bold p-2 outline-none focus:outline-none" placeholder="Enter Professor Name"/>
                    </div>

                    <div>
                        <div className="text-gray-700 font-bold">School</div>
                        <input ref={schoolRef} required className="rounded-md shadow-md w-full text-base font-bold p-2 outline-none focus:outline-none" placeholder="Enter School"/>
                    </div>
                </animated.div>
            </div>
        </div>




    )

}

export default UserCardV2;