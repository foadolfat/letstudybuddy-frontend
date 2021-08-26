// Original: https://github.com/chenglou/react-motion/tree/master/demos/demo8-draggable-list

// import React, { useRef } from 'react'
// import clamp from 'lodash-es/clamp'
// import swap from 'lodash-move'
// import { useGesture } from 'react-with-gesture'
// import { useSprings, animated, interpolate } from 'react-spring'
// import './styles.css'

// // WHEN dragging, this function will be fed with all arguments.
// // OTHERWISE, only the list order is relevant.
// const fn = (order, down, originalIndex, curIndex, y) => index =>
//   down && index === originalIndex
//     ? /*
//       No need to transition the following properties:
//       - z-index, the elevation of the item related to the root of the view; it should pop straight up to 1, from 0.
//       - y, the translated distance from the top; it's already being updated dinamically, smoothly, from react-gesture.
//       Thus immediate returns `true` for both.
//     */
//       { y: curIndex * 100 + y, scale: 1.1, zIndex: '1', shadow: 15, immediate: n => n === 'y' || n === 'zIndex' }
//     : { y: order.indexOf(index) * 100, scale: 1, zIndex: '0', shadow: 1, immediate: false }

// function ClassesDash({ items }) {
//   const order = useRef(items.map((_, index) => index)) // Store indices as a local ref, this represents the item order
//   /*
//     Curries the default order for the initial, "rested" list state.
//     Only the order array is relevant when the items aren't being dragged, thus
//     the other arguments from fn don't need to be supplied initially.
//   */
//   const [springs, setSprings] = useSprings(items.length, fn(order.current))
//   const bind = useGesture(({ args: [originalIndex], down, delta: [, y] }) => {
//     const curIndex = order.current.indexOf(originalIndex)
//     const curRow = clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1)
//     const newOrder = swap(order.current, curIndex, curRow)
//     /*
//       Curry all variables needed for the truthy clause of the ternary expression from fn,
//       so that new objects are fed to the springs without triggering a re-render.
//     */
//     setSprings(fn(newOrder, down, originalIndex, curIndex, y))
//     // Settles the new order on the end of the drag gesture (when down is false)
//     if (!down) order.current = newOrder
//   })
//   return (
//     <div class="content" style={{ height: items.length * 100 }}>
//       {springs.map(({ zIndex, shadow, y, scale }, i) => (
//         <animated.div
//           {...bind(i)}
//           key={i}
//           style={{
//             zIndex,
//             boxShadow: shadow.interpolate(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
//             transform: interpolate([y, scale], (y, s) => `translate3d(0,${y}px,0) scale(${s})`)
//           }}
//           children={items[i]}
//         />
//       ))}
//     </div>
//   )
// }

// export default ClassesDash;



import SpringList from 'react-spring-dnd';
// import { useGesture } from 'react-with-gesture'
import * as React from "react"
import TEST from "./TEST.jsx"
import './styles.css'
import Profile from '../../services/Profile.js';

function ClassesDash({editing}){
  const [classes, setClasses] = React.useState([{},{},{},{},{},{}]);
  const [newClass, setNewClass] = React.useState([{},{},{},{},{},{}]);
  const [classesExist, setClassesExist] = React.useState(true);
  const classNameRef = React.useRef();
  const schoolRef = React.useRef();
  const profRef = React.useRef();
  const addClass = () => {
    const api = new Profile();
    api.addClasses(classNameRef.current.value, schoolRef.current.value, profRef.current.value ).then((response) => setNewClass(response.classes));
    //catch((reason => {console.log(reason)}))
  }


    React.useEffect(() => {
      const api = new Profile();
      api.getClasses().then((response) => {
        console.log(response);
        if(response.code) setClassesExist(false);
        else {
          setClassesExist(true);
          setClasses(response.classes);
        }
      })
    },[newClass]);
  
    
    return(

        // <div className="classes-dash bg-primary-dark text-on-primary-dark text-xl font-bold p-3">
        //     Classes
        // </div>
        
            <div className="flex flex-col h-full w-400 justify-center items-center bg-primary-dark rounded-lg shadow-md">
                {classesExist && !editing && <div className="flex flex-col h-full w-400 justify-center items-center  rounded-lg shadow-md ">
                  <SpringList onDragEnd={(order) => {console.log(order)}}>
                      {classes && classes.map((c) => {
                          return <TEST setNewClass={setNewClass} key={c} NAME={c.CLASS_NAME} SCHOOL={c.SCHOOL}/>
                      })}
                  </SpringList>
                </div>}
                {!classesExist && !editing && <div className="flex flex-col h-full text-center p-2 w-400 justify-center items-center text-on-primary-dark text-3xl rounded-lg shadow-md bg-primary-dark">
                  No Classes, click the edit icon to add more.
                </div>}
                {editing &&
                  <div className="  flex flex-col space-y-2 w-full h-full bg-secondary-dark items-center justify-center rounded-lg focus:outline-none select-none ">
                    <input className="rounded-lg shadow-lg w-1/2 h-8 pl-2 select-none focus:outline-none" ref={classNameRef} placeholder={"Class Name"}></input>
                    <input className="rounded-lg shadow-lg w-1/2 h-8 pl-2 select-none focus:outline-none" ref={schoolRef} placeholder={"School"}></input>
                    <input className="rounded-lg shadow-lg w-1/2 h-8 pl-2 select-none focus:outline-none" ref={profRef} placeholder={"Professor"}></input>
                    
                    <button className="bg-gray-100 bg-primary-light text-on-primary-light w-1/3 h-12 rounded-lg shadow-lg" onClick={addClass}>Add Class</button>
                  </div>
                }
            </div>
        

    )

}

export default ClassesDash;