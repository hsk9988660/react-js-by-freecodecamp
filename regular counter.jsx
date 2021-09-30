import React, { useState } from 'react';
// very important



// how  to increase and reset 
/*export const Counter=()=>{
const[value,setvalue]=useState(0)

const reset=()=>{
setvalue(0)
}

    return(
<>
<h1>REGULAR COUNTER</h1>
<h1>{value}</h1>
<button onClick={()=>setvalue(value-1)} >decrease</button>
<button onClick={reset}>reset</button>
<button onClick={()=>setvalue(value+1)} >increase</button>





</>



    )



}*/





// more complex function



// how we can update a function
export const Counter=()=>{
const[value,setvalue]=useState(0)
const reset=()=>{
setvalue(0)
}
const cincrease=()=>{
setTimeout(() => {
    setvalue(value+1) // this value base approach
    setvalue((prevalue)=>{
return prevalue+1 // this is functional approach
// in functional approach we must reurn somthing
// this is very imporatnt
    })
}, 3000);


}

    return(
<>
<h1>REGULAR COUNTER</h1>
<h1>{value}</h1>
<button onClick={()=>setvalue(value+1)} >increase</button>
<button onClick={reset}>reset</button>
<button onClick={()=>setvalue(value+1)} >increase</button>
<button onClick={cincrease}>complex increase </button>




</>



    )



}