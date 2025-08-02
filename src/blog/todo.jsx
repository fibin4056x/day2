import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios, { Axios } from 'axios'
function Todo() {
const [text,settext]=useState("")
const[name,setname]=useState([])


function handletext(e){
  
 settext(e.target.value)
}

useEffect(()=>{
  axios.get("http://localhost:3001/user")
  .then(res=>setname(res.data))
  .catch(err =>console.err("fetch error:" ,err));
  
},[])

const add =async (e)=>{
  e.preventDefault()

  if(text.trim() != "")
  {
    const newtodo={text}

    try{
      const res = await axios.post('http://localhost:3001/user',newtodo)
      setname([...name,res.data])
      settext('')
      }catch(err){
        console.log("addd wrrror",err)
      }
  }
}

  return (

  <>
  <div>
    <form action="">
      <input type="text"
      value={text}
      onChange={handletext}
      />

    <button onClick={add}>add</button>
    <ol>
      {
        name.map((va,index)=>(
          <li key={index}>{va.text}</li>
        ))
      }
    </ol>
    
    </form>
  </div>
    <div>
      <Link to='/' ><button>Home</button></Link>
    </div>
    </>
  )
}

export default Todo
