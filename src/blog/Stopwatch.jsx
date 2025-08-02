import React, { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'

function reducer(state,action){
    switch(action.type){
        case 'start':
            return{count:state.count +1}
        case "stop":
            return{count:state.count}
        case "reset":
            return{count:state.count*0}
    }
}
function Stopwatch() {
const [state,dispatch] =useReducer(reducer,{count:0})
const [run,setrun]=useState(false)

useEffect(()=>{
    let timer;
    if (run){
        timer=setInterval(()=>{
            dispatch({type:'start'})
        },1000)
    }
    return ()=>clearInterval(timer)
},[run])
const handleStart=()=> setrun(true)
const handleStop=()=> setrun(false)
const handlereset=()=>{
    dispatch({type:'reset'})
    setrun(false)
}
 
  return (
   <>
   <div>
    <div>{state.count}</div>
    <div><button onClick={handleStart}>start</button>
    <button onClick={handleStop}>stop</button>
    <button onClick={handlereset}>reset</button></div>
   </div>
    <div>
      <Link to='/' ><button>Home</button></Link>
    </div>
    </>
  )
}

export default Stopwatch
