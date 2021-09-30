import React from 'react'
import { useState } from 'react/cjs/react.development'

const Circuit = () => {
const [text,settext]=useState("ss")


  return (
    <>
     {/* <h1>{text || "hello"}</h1> */}
      <h2>{text && "helloworld"}</h2>
    {/* in OR operater we can say if one of two is true then it will display value
    but in And operator if both are true then it will display value else it willl not display
    
    */}

    </>
  )
}

export default Circuit

