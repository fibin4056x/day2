import React from 'react'
 import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './blog/Homepage'
import Couter from './blog/Couter'
import Stopwatch from './blog/Stopwatch'
import Todo from './blog/todo'
import Navbar from './blog/navbar'
import Usecontext from './blog/usecontext'
function App() {
  return (
    <div>
          <Usecontext>
    <BrowserRouter>
    <Navbar/>
 
      <Routes>
        
  
     <Route  path='/' element={<Homepage/>}/>
   
      <Route  path='Couter' element={<Couter/>}/>
      <Route  path='Stopwatch' element={<Stopwatch/>}/>
        <Route  path='Todo' element={<Todo/>}/>
      </Routes>
      
    </BrowserRouter>
    </Usecontext>

    </div>
  )
  }

export default App
