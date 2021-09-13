import * as React from "react"
import GPA from "../../assets/icons/GPA.jsx"
import Profile from "../../services/Profile.js";

import ClassesDashV2 from "../classes/ClassesDashV2.jsx";
import {ReactComponent as EDIT} from "../../assets/icons/edit_solid.svg"
import {ReactComponent as SAVE} from "../../assets/icons/check_solid.svg"
import { useSpring, animated } from 'react-spring'
import Loader from "react-loader-spinner";


function UserCardV2(){
    const[fetchUserInProgress, setFetchUserInProgress] = React.useState(false);
    const[fetchClassInProgress, setFetchClassInProgress] = React.useState(false);
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
        transform: addClassesActive ? `translate3d(0,-180%,0)` : `translate3d(0,100%,0)`,

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
            api.getClasses(setFetchClassInProgress).then((response) => {
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
            api.getUser(setFetchUserInProgress).then((user) => {
                setUser(user);
                localStorage.setItem("chat", JSON.stringify({"name":user.USERNAME}));
            }).catch((reason => {console.log(reason)}))
        }
        return () => mounted = false;
    },[updateHappened]);
    

    return(

        <div className="shadow-lg  overflow-hidden ">

           <div className="flex flex-col --surface text-gray-800 rounded-lg 

                            xxs:p-4 lg:p-8 
                            

                            2xl:w-500 2xl:h-500
                            xl:w-500 xl:h-500  
                            lg:w-500 lg:h-500  
                            md:w-350 md:h-500  
                            sm:w-350 sm:h-450  
                            xs:w-350 xs:h-450
                            xxs:w-250 xxs:h-400">

                {!fetchUserInProgress && <div className="flex xxs:flex-col lg:flex-row xxs:space-y-6 lg:space-y-0 justify-between">
                    <div className="flex xxs:w-full lg:w-3/4">
                        <div className="text-sm font-bold text-gray-400 xxs:space-y-6 lg:space-y-12  w-200">
                            <div className="space-y-4 xxs:space-y-1">
                                <span className="">
                                    Username:
                                </span>
                                {!usernameEdit &&
                                <div className="flex lg:text-xl xxs:text-sm md:text-base font-bold text-gray-800 items-center">
                                    <button className="edit-button" onClick={() => setUsernameEdit(!usernameEdit)}><EDIT/></button>
                                    {user.USERNAME}
                                </div>}
                                {usernameEdit &&
                                <div className="flex lg:text-xl xxs:text-sm md:text-base font-bold text-gray-800 items-center">
                                    <button className="edit-button" onClick={() => {setUsernameEdit(!usernameEdit); handleUsernameChange();}}><SAVE/></button>
                                    <input ref={usernameRef} placeholder="Enter username:" className="w-full outline-none focus:outline-none rounded-md shadow-md"></input>
                                </div>}
                            </div>
                        
                            <div >
                                <span>Major:</span>
                                {!majorEdit &&
                                <div className="flex lg:text-xl xxs:text-sm md:text-base font-bold text-gray-800 items-center">
                                    <button className="edit-button" onClick={() => setMajorEdit(!majorEdit)}><EDIT/></button>
                                    {user.MAJOR}
                                </div>}
                                {majorEdit &&
                                <div className="flex lg:text-xl xxs:text-sm md:text-base font-bold text-gray-800 items-center">
                                    <button className="edit-button" onClick={() => {setMajorEdit(!majorEdit); handleMajorChange();}}><SAVE/></button>
                                    <input ref={majorRef} placeholder="Enter major:" className="w-full outline-none focus:outline-none rounded-md shadow-md"></input>
                                </div>}
                            </div>
                        
                        </div>
                        <div className="text-sm font-bold text-gray-400 xxs:space-y-6 lg:space-y-12  w-200">
                        
                            <div className="space-y-4 xxs:space-y-1">
                                <span>Name:</span>
                                {!nameEdit &&
                                <div className="flex lg:text-xl xxs:text-sm md:text-base font-bold text-gray-800 items-center">
                                    <button className="edit-button" onClick={() => setNameEdit(!nameEdit)}><EDIT/></button>
                                    <div>
                                        {user.FNAME} {user.LNAME}
                                    </div>
                                </div>}
                                {nameEdit &&
                                <div className="flex lg:text-xl xxs:text-sm md:text-base font-bold text-gray-800 items-center">
                                    <button className="edit-button" onClick={() => {setNameEdit(!nameEdit); handleNameChange();}}><SAVE/></button>
                                    <input ref={nameRef} placeholder="Enter name:" className="w-full outline-none focus:outline-none rounded-md shadow-md"></input>
                                </div>}
                            </div>
                            <div>
                                <span>Degree:</span>
                                {!degreeEdit &&
                                <div className="flex lg:text-xl xxs:text-sm md:text-base font-bold text-gray-800 items-center">
                                    <button className="edit-button" onClick={() => setDegreeEdit(!degreeEdit)}><EDIT/></button>
                                    {user.DEGREE}
                                </div>}
                                {degreeEdit &&
                                <div className="flex text-xl xxs:text-sm md:text-base font-bold text-gray-800 items-center">
                                    <button className="edit-button" onClick={() => {setDegreeEdit(!degreeEdit); handleDegreeChange();}}><SAVE/></button>
                                    <input ref={degreeRef} placeholder="Enter degree:" className="w-full outline-none focus:outline-none rounded-md shadow-md"></input>
                                </div>}
                            </div>
                        
                        </div>
                    </div>

                    <div className="lg:w-1/3">
                        {!gpaEdit &&
                        <div className="xxs:w-1/3 lg:w-full text-sm font-bold text-gray-400">
                            <span className="flex items-center">
                                <button className="edit-button " onClick={() => setGPAEdit(!gpaEdit)}><EDIT/></button>
                                GPA:
                            </span>
                            <div>{user.GPA>0 && <GPA percentage={(user.GPA/4)*100} speed={20} strokeColor={"green"}/>}</div>
                            <div>{!user.GPA>0 && <GPA percentage={(0/4)*100} speed={20} strokeColor={"green"}/>}</div>
                        </div>}
                        {gpaEdit &&
                        <div className="flex flex-col w-1/4 xxs:w-1/2 text-sm font-bold text-gray-400">
                            <div className="flex xxs:flex-col xxs:mb-12 xs:mb-20 xxs:space-y-1">
                                <button className="edit-button " onClick={() => {setGPAEdit(!gpaEdit); handleGPAChange();}}><SAVE/></button>
                                <input ref={gpaRef} placeholder="GPA:" type="number" step="0.01" min="0" max="4" className="w-1/2 outline-none focus:outline-none rounded-md shadow-md"></input>
                            </div>
                        </div>}
                    </div>
                </div>}
                {fetchUserInProgress&&
                    <Loader type="ThreeDots" color="bg-secondary" height="100" width="100" />
                }

                {!fetchClassInProgress && <div className="text-lg 
                                xxs:text-sm  xxs:pt-4
                                md:text-base md:pt-14
                                lg:text-lg lg:pt-28
                                font-bold text-gray-400">
                    <div>
                        Your classes:
                    </div>
                    <div className="flex space-x-4 xxs:mt-1 mt-4 overflow-auto ">
                        <button className="w-40 lg:h-36 bg-primary-light hover:bg-primary text-on-primary-light rounded-lg shadow-lg p-6 text-xl xxs:text-sm md:text-base font-bold text-gray-800" 
                                onClick = {() => handleAddClass()}> 
                            {!addClassesActive && <span className="w-full text-base xxs:text-sm md:text-base">Add Class</span>}
                            {addClassesActive && <span className="w-full text-base xxs:text-sm md:text-base">Finish Adding</span>}
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
                </div>}
                {fetchClassInProgress&&
                    <Loader type="ThreeDots" color="bg-secondary" height="100" width="100" />
                }

                {!fetchClassInProgress && <animated.div className="bg-secondary h-full w-full rounded-lg shadow-lg flex flex-col p-4 justify-center items-center " style={addClassSlide}>
                    <div>
                        <div className="text-gray-700 font-bold">Class Name</div>
                        <input ref={classNameRef} required className="rounded-md shadow-md w-full text-base xxs:text-sm md:text-base font-bold p-2 outline-none focus:outline-none" placeholder="Enter Class Name"/>
                    </div>

                    <div>
                        <div className="text-gray-700 font-bold">Professor</div>
                        <input ref={profRef} required className="rounded-md shadow-md w-full text-base xxs:text-sm md:text-base font-bold p-2 outline-none focus:outline-none" placeholder="Enter Professor Name"/>
                    </div>

                    <div>
                        <div className="text-gray-700 font-bold">School</div>
                        <input ref={schoolRef} required className="rounded-md shadow-md w-full text-base xxs:text-sm md:text-base font-bold p-2 outline-none focus:outline-none" placeholder="Enter School"/>
                    </div>
                </animated.div>}
                {fetchClassInProgress&&
                    <Loader type="ThreeDots" color="bg-secondary" height="100" width="100" />
                }
            </div>
        </div>




    )

}

export default UserCardV2;