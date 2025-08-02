import React, { useContext } from 'react'

import { Context } from './usecontext'

function Homepage() {
  const{text}=useContext(Context)
  return (
    <div>
      
       hello welcme {text}
    </div>
  )
}

export default Homepage
