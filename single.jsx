import React from 'react'
import { useContext } from 'react'

import {personContext} from './usecontext'



export  const  Singleperson = ({id,name}) => {
    const{ removeperson   }=useContext(personContext)
  return (
    <>sss
    <div>
<h3>{name}</h3>
<button   onClick={()=>removeperson (id)}>remove</button>


    </div>
    </>
  )
}


