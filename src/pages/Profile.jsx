import * as React from "react";
import Navbar from "../components/Navbar";
// import ClassesDash from "../components/classes/ClassesDash";
import UserCard from "../components/users/UserCard";
import UserCardV2 from "../components/users/UserCardV2";
// import Suggestions from "../components/suggestions/Suggestions";

function Profile(){
    

    return(
        <div className="parent bg-gray-300 md:overflow-hidden sm:overflow-x-hidden">
            <div className="">
                <Navbar inProfile={true}/>
            </div>
            {/* <div className=""><UserCard/></div>
                    <div className=" 2xl:h-700  xl:h-500  lg:h-400  md:h-400  sm:h-400  xs:h-400 "><ClassesDash /></div> */}
            <div className="flex flex-col h-full xs:mt-12 md:mt-0 justify-center ">
                <div className="flex items-center justify-center overflow-none">
                    <UserCardV2/>
                </div> 
            </div>
            
            {/* <div className="flex md:flex-row xs:flex-col xs:items-center md:m-0 xs:mb-4 xs:overflow-visible md:overflow-none h-screen w-screen"> */}
                {/* <div className="w-full h-full flex flex-row items-center justify-center"> */}
                    {/* <div className="xs:mb-4 h-full w-full md:m-0 xs:mb-4 xs:pt-4"> */}
                        {/* <div className=""> */}
                            {/* <div className="flex h-full  w-full flex-row justify-center items-center xs:mb-4 md:m-0 xs:mb-4 xs:pt-4 md:flex-row xs:flex-col xs:items-center xs:mb-4 xs:overflow-visible md:overflow-none">
                                <div className="flex justify-center items-center"><UserCard/></div>
                                <div className="flex  2xl:h-700  xl:h-500  lg:h-400  md:h-400  sm:h-400  xs:h-400 items-center"><ClassesDash /></div>
                            </div>
                            <div className="">
                                 */}
                            {/* </div> */}
                        {/* </div> */}
                    {/* </div> */}             
                {/* </div> */}
            {/* </div> */}
        </div>
    )
    
}

export default Profile;
























// const [toggle, set] = useState(false)
    // const handleEdit = () => {
    //     set(!toggle);
    // }
    // const transitions = useTransition(toggle, {
    //     from: { position: 'absolute', opacity: 0 },
    //     enter: { opacity: 1 },
    //     leave: { opacity: 0 },
    //     reverse: toggle,
    //     delay: 200,
    // })
    // return transitions(({ opacity }, item) =>
    //     item ? (
        
        
    //     <animated.div
    //         style={{
    //         position: 'absolute',
    //         opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
    //         }}>
    //             <div  className="w-full h-full flex items-center ">

    //             <div className="mx-auto flex flex-col justify-center shadow-lg">
                    
    //                  <div className="bg-primary-light rounded-t-lg 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-350 md:h-200  sm:w-300 sm:h-200  xs:w-300 xs:h-200">
    //                      <div className="relative w-full h-full">
    //                          <img className="object-cover rounded-t-lg w-full h-full"
    //                         src="https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg"/>
    //                         <button className="absolute text-secondary-dark hover:text-primary-light top-0 right-0" onClick={handleEdit}><SAVE/></button>
    //                     </div>
    //                 </div>
    //                 <div className="bg-secondary-dark xs:p-2 md:p-6 text-on-primary-dark rounded-b-lg sm:space-y-4 xl:space-y-6 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-350 md:h-200  sm:w-300 sm:h-200  xs:w-300 xs:h-200">
    //                     <div className="flex xs:flex-col md:flex-row xl:text-xl lg:text-md md:justify-between md:space-x-2 xs:space-y-4 md:space-y-0">
    //                         <div className="" >Name: <input type="text" className="w-full text-gray-800 rounded-sm focus:outline-none"></input></div>
    //                         <div className="" >Major: <input type="text" className="w-full text-gray-800 rounded-sm focus:outline-none"></input></div>
    //                         <div className="" >GPA: <input type="text" className="w-full text-gray-800 rounded-sm focus:outline-none"></input></div>
                            
    //                     </div>
    //                     <div className="xs:hidden md:flex md:flex-row">Class priorities:
    //                         <div>

    //                         </div>
    //                     </div>
    //                 </div>

    //             </div>

    //         </div>
    //     </animated.div>
    //     ) : (
    //     <animated.div
    //         style={{
    //         position: 'absolute',
    //         opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
    //         }}>
    //             <div className="w-full h-full flex items-center ">

    //             <div className="mx-auto flex flex-col justify-center shadow-lg">

    //                  <div className="bg-primary-light rounded-t-lg 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-350 md:h-200  sm:w-300 sm:h-200  xs:w-300 xs:h-200">
    //                      <div className="relative w-full h-full">
    //                          <img className="object-cover rounded-t-lg w-full h-full"
    //                         src="https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg"/>
    //                         <button className="absolute text-primary-light hover:text-secondary-dark top-0 right-0" onClick={handleEdit}><EDIT/></button>
    //                     </div>
    //                 </div>
    //                 <div className="bg-primary-dark p-8 text-on-primary-dark rounded-b-lg xs:space-y-4 xl:space-y-6 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-350 md:h-200  sm:w-300 sm:h-200  xs:w-300 xs:h-200">
    //                     <div className="flex xs:flex-col md:flex-row xl:text-xl lg:text-md md:space-x-16 lg:space-x-24 2xl:space-x-36 xs:space-y-4 md:space-y-0">
    //                         <div>Name:</div>
    //                         <div>Major:</div>
    //                         <div>GPA:</div>
                            
    //                     </div>
    //                     <div className="xs:hidden md:flex md:flex-row">Class priorities:</div>
    //                 </div>

    //             </div>

    //         </div>
    //     </animated.div>
        
    //     )
    // )


    //  const [inEdit, setInEdit] = useState(false);
    //  const editRef = useRef();
    //  const saveRef = useRef();
    //  const handleEdit = () => {
    //     setInEdit(!inEdit);
    // }
    // return(

    //     <div className="parent bg-gray-300">
    //         <Navbar inProfile={true}/>
            

    //         <CSSTransition
    //             in={inEdit}
    //             timeout={800}
    //             classNames={"replace"}
    //             onExited = {() => {editRef.current.classList.add("hidden")}}
    //             onEnter = {() => {editRef.current.classList.remove("hidden")}}
    //         >
    //             <div ref={editRef} className="w-full h-full flex items-center ">

    //                 <div className="mx-auto flex flex-col justify-center shadow-lg">
                        
    //                     <div className="bg-primary-light rounded-t-lg 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-350 md:h-200  sm:w-300 sm:h-200  xs:w-300 xs:h-200">
    //                         <div className="relative w-full h-full">
    //                             <img className="object-cover rounded-t-lg w-full h-full"
    //                             src="https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg"/>
    //                             <button className="absolute text-secondary-dark hover:text-primary-light top-0 right-0" onClick={handleEdit}><SAVE/></button>
    //                         </div>
    //                     </div>
    //                     <div className="bg-secondary-dark xs:p-2 md:p-6 text-on-primary-dark rounded-b-lg sm:space-y-4 xl:space-y-6 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-350 md:h-200  sm:w-300 sm:h-200  xs:w-300 xs:h-200">
    //                         <div className="flex xs:flex-col md:flex-row xl:text-xl lg:text-md md:justify-between md:space-x-2 xs:space-y-4 md:space-y-0">
    //                             <div className="" >Name: <input type="text" className="w-full text-gray-800 rounded-sm focus:outline-none"></input></div>
    //                             <div className="" >Major: <input type="text" className="w-full text-gray-800 rounded-sm focus:outline-none"></input></div>
    //                             <div className="" >GPA: <input type="text" className="w-full text-gray-800 rounded-sm focus:outline-none"></input></div>
                                
    //                         </div>
    //                         <div className="xs:hidden md:flex md:flex-row">Class priorities:
    //                             <div>

    //                             </div>
    //                         </div>
    //                     </div>

    //                 </div>

    //             </div>
    //         </CSSTransition>
    //         <CSSTransition
    //             in={!inEdit}
    //             timeout={800}
    //             classNames={"replace"}
    //             onExited = {() => {saveRef.current.classList.add("hidden")}}
    //             onEnter = {() => {saveRef.current.classList.remove("hidden")}}
    //         >
    //             <div ref={saveRef} className="w-full h-full flex items-center ">

    //                 <div className="mx-auto flex flex-col justify-center shadow-lg">

    //                     <div className="bg-primary-light rounded-t-lg 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-350 md:h-200  sm:w-300 sm:h-200  xs:w-300 xs:h-200">
    //                         <div className="relative w-full h-full">
    //                             <img className="object-cover rounded-t-lg w-full h-full"
    //                             src="https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg"/>
    //                             <button className="absolute text-primary-light hover:text-secondary-dark top-0 right-0" onClick={handleEdit}><EDIT/></button>
    //                         </div>
    //                     </div>
    //                     <div className="bg-primary-dark p-8 text-on-primary-dark rounded-b-lg xs:space-y-4 xl:space-y-6 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-350 md:h-200  sm:w-300 sm:h-200  xs:w-300 xs:h-200">
    //                         <div className="flex xs:flex-col md:flex-row xl:text-xl lg:text-md md:space-x-16 lg:space-x-24 2xl:space-x-36 xs:space-y-4 md:space-y-0">
    //                             <div>Name:</div>
    //                             <div>Major:</div>
    //                             <div>GPA:</div>
                                
    //                         </div>
    //                         <div className="xs:hidden md:flex md:flex-row">Class priorities:</div>
    //                     </div>

    //                 </div>

    //             </div>

    //         </CSSTransition>
    //         {/* {!inEdit && <div className="w-full h-full flex items-center ">

    //             <div className="mx-auto flex flex-col justify-center shadow-lg">

    //                 <div className="bg-primary-light rounded-t-lg 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-350 md:h-200  sm:w-300 sm:h-200  xs:w-300 xs:h-200">
    //                     <div className="relative w-full h-full">
    //                         <img className="object-cover rounded-t-lg w-full h-full"
    //                          src="https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg"/>
    //                          <button className="absolute text-primary-light hover:text-secondary-dark top-0 right-0" onClick={handleEdit}><EDIT/></button>
    //                     </div>
    //                 </div>
    //                 <div className="bg-primary-dark p-8 text-on-primary-dark rounded-b-lg xs:space-y-4 xl:space-y-6 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-350 md:h-200  sm:w-300 sm:h-200  xs:w-300 xs:h-200">
    //                     <div className="flex xs:flex-col md:flex-row xl:text-xl lg:text-md md:space-x-16 lg:space-x-24 2xl:space-x-36 xs:space-y-4 md:space-y-0">
    //                         <div>Name:</div>
    //                         <div>Major:</div>
    //                         <div>GPA:</div>
                            
    //                     </div>
    //                     <div className="xs:hidden md:flex md:flex-row">Class priorities:</div>
    //                 </div>

    //             </div>

    //         </div>} */}

    //         {/* {inEdit && <div className="w-full h-full flex items-center ">

    //             <div className="mx-auto flex flex-col justify-center shadow-lg">
                    
    //                 <div className="bg-primary-light rounded-t-lg 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-350 md:h-200  sm:w-300 sm:h-200  xs:w-300 xs:h-200">
    //                     <div className="relative w-full h-full">
    //                         <img className="object-cover rounded-t-lg w-full h-full"
    //                          src="https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg"/>
    //                          <button className="absolute text-secondary-dark hover:text-primary-light top-0 right-0" onClick={handleEdit}><SAVE/></button>
    //                     </div>
    //                 </div>
    //                 <div className="bg-secondary-dark xs:p-2 md:p-6 text-on-primary-dark rounded-b-lg sm:space-y-4 xl:space-y-6 2xl:w-600 2xl:h-350  xl:w-500 xl:h-250  lg:w-400 lg:h-200  md:w-350 md:h-200  sm:w-300 sm:h-200  xs:w-300 xs:h-200">
    //                     <div className="flex xs:flex-col md:flex-row xl:text-xl lg:text-md md:justify-between md:space-x-2 xs:space-y-4 md:space-y-0">
    //                         <div className="" >Name: <input type="text" className="w-full text-gray-800 rounded-sm focus:outline-none"></input></div>
    //                         <div className="" >Major: <input type="text" className="w-full text-gray-800 rounded-sm focus:outline-none"></input></div>
    //                         <div className="" >GPA: <input type="text" className="w-full text-gray-800 rounded-sm focus:outline-none"></input></div>
                            
    //                     </div>
    //                     <div className="xs:hidden md:flex md:flex-row">Class priorities:
    //                         <div>

    //                         </div>
    //                     </div>
    //                 </div>

    //             </div>

    //         </div>} */}
            
    //     </div>

    //)