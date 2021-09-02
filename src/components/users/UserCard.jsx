import * as React from "react";
import { useState}from "react";
import {ReactComponent as EDIT} from "../../assets/icons/edit_solid.svg"
import {ReactComponent as SAVE} from "../../assets/icons/check_solid.svg"
import { useTransition, animated } from 'react-spring';
import ClassesDash from "../classes/ClassesDash";
import Profile from "../../services/Profile";


function UserCard(){
    const [toggle, set] = useState(false)
    const [user, setUser] = React.useState();

    const firstNameRef = React.useRef();
    const lastNameRef = React.useRef();
    const majorRef = React.useRef();
    const degreeRef = React.useRef();
    const gpaRef = React.useRef();


    React.useEffect(() => {
        const api = new Profile();
        api.getUser().then((user) => {
            setUser(user);
        }).catch((reason => {console.log(reason)}))
    },[]);


    const handleEdit = () => {
        if(toggle === true){
            if(firstNameRef.current.value === '' && user && user.FNAME) firstNameRef.current.value = user.FNAME;
            if(lastNameRef.current.value === '' && user && user.LNAME) lastNameRef.current.value = user.LNAME;
            if(majorRef.current.value === '' && user && user.MAJOR) majorRef.current.value = user.MAJOR;
            if(degreeRef.current.value === '' && user && user.MAJOR) degreeRef.current.value = user.DEGREE;
            if(gpaRef.current.value === '' && user && user.GPA) gpaRef.current.value = user.GPA;
            if(gpaRef.current.value > 4 ) gpaRef.current.value = 4;
            if(gpaRef.current.value < 0 ) gpaRef.current.value = 0;
            //console.log(firstNameRef.current.value, lastNameRef.current.value, majorRef.current.value)
            const api = new Profile();
            api.updateUser(firstNameRef.current.value, lastNameRef.current.value, majorRef.current.value, degreeRef.current.value, gpaRef.current.value).then((response) => {
                if(!response.code) setUser(response)
            });
        }
        set(!toggle);
    }

    const transitions = useTransition(toggle, {
        // from: { position: 'absolute', opacity: 0, transform:`scale(0)`}, 
        // enter: { opacity: 1, transform:`scale(1)` },
        // leave: { opacity: 0, transform:`scale(0.70)` },

        from: { position: 'absolute', opacity: 0, transform:`scale(0.95)`}, 
        enter: { opacity: 1, transform:`scale(1)` },
        leave: { opacity: 0, transform:`scale(0.95)` },

        // from: { opacity: 0, transform: `perspective(600px) rotateY(${toggle ? 0 : 0}deg)`},
        // enter: { opacity: 1, transform: `perspective(600px) rotateY(${toggle ? 180 : 0}deg)` },
        // leave:{ opacity: 0, transform: `perspective(600px) rotateY(${toggle ? 180 : 0}deg)` },
        // config: { mass: 5, tension: 300, friction: 80 },

        initial: { position: "absolute", opacity: 1  },
        trail: 200,
        order: ["leave", "enter", "update"],
        
        

    })
    //,transform
    return transitions(({ opacity, transform }, item) =>
        item ? 
        
        (
            
        <animated.div
            style={{
            //opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
            transform,
            opacity,
            position: 'absolute',
            
            
            }}
             
        >
            <div  className="md:flex gap-4 xs:space-y-4 md:space-y-0">

                <div className="shadow-lg">
                    
                     <div className="bg-primary-light rounded-t-lg 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-400 md:h-200  sm:w-400 sm:h-200  xs:w-400 xs:h-200">
                         <div className="relative w-full h-full">
                             <img className="object-cover rounded-t-lg w-full h-full"
                            src="https://miro.medium.com/max/500/1*5ZpezKwqt6fUXNNBpSUDXA.jpeg" alt={'userpic'}/>
                            <button className="absolute text-secondary-dark hover:text-primary-light top-0 right-0" onClick={handleEdit}><SAVE/></button>
                        </div>
                    </div>
                    <div className="bg-secondary-dark xs:p-2 md:p-6 text-on-primary-dark rounded-b-lg sm:space-y-4 xl:space-y-6 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-400 md:h-200  sm:w-400 sm:h-200  xs:w-400 xs:h-200">
                        <div className="flex xs:flex-col  xl:text-xl lg:text-md md:justify-between md:space-x-2 xs:space-y-4 md:space-y-0">
                            <div>
                                
                                <div className="" >First Name: <input type="text" ref={firstNameRef} className="w-full text-gray-800 rounded-sm focus:outline-none"></input></div>
                                <div className="" >Last Name: <input type="text" ref={lastNameRef} className="w-full text-gray-800 rounded-sm focus:outline-none"></input></div>
                                <div className="" >Major: <input type="text" ref={majorRef} className="w-full text-gray-800 rounded-sm focus:outline-none"></input></div>
                                <div className="" >Degree: <input type="text" ref={degreeRef} className="w-full text-gray-800 rounded-sm focus:outline-none"></input></div>
                                <div className="" >GPA: <input type="number" ref={gpaRef}  className="w-full text-gray-800 rounded-sm focus:outline-none" step="0.01" min="0" max="4"></input></div>
                            </div>
                            
                        </div>
                        {/* <div className="xs:hidden md:flex md:flex-row">Class priorities:
                            <div>

                            </div>
                        </div> */}
                    </div>

                </div>
                <div className=" 2xl:h-700  xl:h-500  lg:h-400  md:h-400  sm:h-400  xs:h-400 "><ClassesDash editing={toggle}/></div>
            </div>
        </animated.div>
        ) : (
        <animated.div
            style={{
            position: 'absolute',
            transform,
            //opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
            opacity,
            
            }}
            
        >
                {/* w-full h-full */}
            <div className="md:flex gap-4 xs:space-y-4 md:space-y-0">
            {/* mx-auto flex flex-col justify-center  */}
                <div className="shadow-lg">

                     <div className="bg-primary-light rounded-t-lg 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-400 md:h-200  sm:w-400 sm:h-200  xs:w-400 xs:h-200">
                         <div className="relative w-full h-full">
                             <img className="object-cover rounded-t-lg w-full h-full"
                            src="https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg" alt={'userpic'}/>
                            <button className="absolute text-primary-light hover:text-secondary-dark top-0 right-0" onClick={handleEdit}><EDIT/></button>
                        </div>
                    </div>
                    <div className="bg-primary-dark p-8 text-on-primary-dark rounded-b-lg xs:space-y-4 xl:space-y-6 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-400 md:h-200  sm:w-400 sm:h-200  xs:w-400 xs:h-200">
                        <div className="flex xs:flex-col xl:text-xl lg:text-md md:space-x-16 lg:space-x-24 2xl:space-x-36 xs:space-y-4 md:space-y-0">
                            
                                <div className="space-y-2">

                                    <div>Name: {user && user.FNAME} {user && user.LNAME}</div>
                                    <div>Major: {user && user.MAJOR}</div>
                                    <div>GPA: {user && user.GPA}</div>
                                    
                                </div>
                            
                            
                        </div>
                        <div className="xs:hidden md:flex md:flex-row">Bio:</div>
                    </div>
                    
                </div>
                <div className=" 2xl:h-700  xl:h-500  lg:h-400  md:h-400  sm:h-400  xs:h-400 "><ClassesDash editing={toggle}/></div>
            </div>
        </animated.div>
        
        )
        
    )
}

export default UserCard;