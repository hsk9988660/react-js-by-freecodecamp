import React from 'react'
import { Prope } from './prop '
import { createContext } from 'react'
import { useState } from 'react'
import {Data} from '../data'
export const personContext=createContext()


const UseC = () => {
    const [people,setpeople]=useState(Data)
const removeperson=(id)=>{
    setpeople((people)=>{
        return people.filter((person)=>person.id!==id)


    })
}
  return (
    <>
    <personContext.Provider  value={{removeperson,people}}>
<h1>prope drilling</h1>
<Prope 




/>
    </personContext.Provider>
    </>
  )
}
//two component that is provider and consumer
export default UseC
