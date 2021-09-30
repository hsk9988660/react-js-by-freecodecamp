import React, { useContext } from 'react'
import {Singleperson} from './single'
import {personContext} from './usecontext'
export const Prope = ({people}) => {
  const mydata=useContext(personContext)
  return (
    <>
{mydata.people.map((e)=>{
  return  <Singleperson
  key={e.id}
  {...e}
  
  
  />




})}




    </>
  )
}


