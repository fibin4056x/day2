import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'
import styles from './Homepage.module.css'

function reudecer(state,action){
switch(action.type){
    case 'increment':
        return{count: state.count +1 }
    case 'decrement':
        return {count :state.count -1}
    case 'reset' :
        return{count :state.count*0}
    }
}
function Couter() {

  const [state,dispatch]=useReducer(reudecer,{count:0})
  return (
    <>
    <div>      <h2>{state.count}</h2></div>
    <div className={styles.button}>

      <button onClick={()=>{dispatch({type:"increment"})}}>+</button> 
      
      <button onClick={()=>{dispatch({type:"decrement"})}}>-</button>
      <button onClick={()=>{dispatch({type:"reset"})}}>reset</button>
      </div>
    <div>
      <Link to='/' ><button>Home</button></Link>
    </div>
    </>
  )
}

export default Couter
