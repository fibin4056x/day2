import React, { createContext } from 'react'
const Context= createContext()

function Usecontext({children}) {
  return (
    <div>
        <Context.Provider value={{text:"fibin"}}>
            {children}
        </Context.Provider>

      
    </div>
  )
}
export {Context}
export default Usecontext
