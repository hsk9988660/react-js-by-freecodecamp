import React, { useEffect,useState } from "react";
//import { useState } from "react/cjs/react.development";
export  const  Clean=()=>{
const [size,setsize]=useState(window.innerWidth)
const   checksize=()=>{
setsize(window.innerWidth)

}

useEffect(()=>{
window.addEventListener('setsize',checksize)

})


    return(
        
<>
<h1>{size}</h1>


</>


    )


}