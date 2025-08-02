import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Homepage.module.css'
function Navbar() {
  return (
    <div>
        <nav  className={styles.button}>
            <div> <NavLink to="Couter"> <button >Couter</button></NavLink></div>
  <div><NavLink to="Stopwatch" ><button >Stopwatch</button></NavLink></div>
   <div><NavLink to="Todo" ><button >Todo</button></NavLink></div>
        </nav>
      
    </div>
  )
}

export default Navbar
