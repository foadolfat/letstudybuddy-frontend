//import React, { useState } from 'react'
//import { useSpring, animated as a } from 'react-spring'
//import {ReactComponent as EDIT} from "../../assets/icons/edit_solid.svg"




// import React, { useRef } from 'react'
// import clamp from 'lodash-es/clamp'
// import swap from 'lodash-move'
// import { useGesture } from 'react-use-gesture'
// import { useSprings, animated, interpolate } from 'react-spring'
// import './styles.css'

// Returns fitting styles for dragged/idle items

// import {useSpring, animated} from "react-spring";
// import {useDrag} from "react-use-gesture";
import * as React from "react"
import Profile from '../../services/Profile.js';

function TEST({setNewClass, NAME, SCHOOL}) {

  const deleteClass = () => {
    const api = new Profile();
    api.deleteClass(NAME, SCHOOL).then(setNewClass([{},{},{},{},{},{}]));
    //catch((reason => {console.log(reason)}))
  }
  // const [newClass, setNewClass] = React.useState({u:'',s:'',e:'',p:''});
  // const addClass = () => {
  //   const api = new Profile();
  //   api.addClasses(newClass.c, newClass.s, newClass.e, newClass.p).catch((reason => {console.log(reason)}))
  // }
  // const divPos = useSpring({x:0, y:0});
  // const bindDivPos = useDrag((params)=>{
  //   divPos.y.set(params.offset[1]);
  //   divPos.x.set(params.offset[0]);
  // })
//w-58 h-20 m-1  flex justify-center items-center rounded-lg shadow-lg focus:outline-none select-none 
  return(
    <div>
      {/* <animated.div */}
        <div className="  bg-gray-100 flex  items-center rounded-lg focus:outline-none select-none ">
        {/* {...bindDivPos()}
        style={{
          y:divPos.y
        }}
      > */}
        {/* {NAME==="Add Class" ? 
          <button className=" bg-gray-100 flex w-full h-full items-center justify-center rounded-lg focus:outline-none select-none " onClick={addClass}>
            Add Class
          </button>
          : */}
          <div className="text-black text-center p-2" >{NAME}, {SCHOOL} 
          <button className="bg-red-500 rounded-lg shadow-lg w-full h-1/2 mt-2" onClick={deleteClass}>Delete Class</button>
          </div>
        {/* } */}
      {/* </animated.div> */}
        </div>
    </div>
    
  )
}

export default TEST;















// const fn = (order, down, originalIndex, curIndex, y) => (index) =>
//   down && index === originalIndex
//     ? { y: curIndex * 100 + y, scale: 1.1, zIndex: '1', shadow: 15, immediate: (n) => n === 'y' || n === 'zIndex' }
//     : { y: order.indexOf(index) * 100, scale: 1, zIndex: '0', shadow: 1, immediate: false }
    
//   const order = useRef(items.map((_, index) => index)) // Store indicies as a local ref, this represents the item order
//   const [springs, setSprings] = useSprings(items.length, fn(order.current)) // Create springs, each corresponds to an item, controlling its transform, scale, etc.
//   const bind = useGesture(({ args: [originalIndex], down, delta: [, y] }) => {
//     const curIndex = order.current.indexOf(originalIndex)
//     const curRow = clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1)
//     const newOrder = swap(order.current, curIndex, curRow)
//     setSprings(fn(newOrder, down, originalIndex, curIndex, y)) // Feed springs new style data, they'll animate the view without causing a single render
//     if (!down) order.current = newOrder
//   })
//   return (
//     <div className="content" style={{ height: items.length * 100 }}>
//       {springs.map(({ zIndex, shadow, y, scale }, i) => (
//         <animated.div
//           {...bind(i)}
//           key={i}
//           style={{
//             zIndex,
//             boxShadow: shadow.interpolate((s) => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
//             transform: interpolate([y, scale], (y, s) => `translate3d(0,${y}px,0) scale(${s})`)
//           }}
//           children={items[i]}
//         />
//       ))}
//     </div>
//   )





// function TEST() {

//   return (
//     <div>

//     </div>
//   )
// }

// export default TEST;