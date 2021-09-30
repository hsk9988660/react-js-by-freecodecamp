import React from 'react'
import { useState } from 'react/cjs/react.development'

const Ternary = () => {
    const [ternay,setternary]=useState(false)
  return (
    <>
     <button onclick={()=>setternary(!ternay)}>

show/hidesss
</button>
{ternay && <Item/>}
 {/* {ternay ? <h1>"khan"</h1>  :  "hashim"} */}

    </>
  )
}
// if it is true it will display khan if it is not true it display hashim
const Item=()=>{

return<>
<h1>window size</h1>

</>




}



export default Ternary
