import React, { useEffect, useState }  from 'react'

export const Ueffect=()=>{
//by default useefect run after every re-render
//   it is also cleanup function
//second parameter
// everything we pass in callback function will run after re-render
// hooks always use after component

//after  pressing button useeffect run every time

// we cannot type hooks in condition

// but condition can set inside hook

// we cannot use hooks in a    condition

const[value,setvalue]=useState(0)




//2-parameter
// we can pass second parameter in useeffect
// if i want that it only render at intial matter 
// then we cann use empty array []
// if want to run useefect one or more time we can passss value in array

    useEffect(() => {
        console.log('this is callback');
        if (value>1) {
        document.title='New Message  ' +     {value}
        
       
}  },[value]) 
    useEffect(() => {
        console.log('hello world');
       
        if (value>1) {
        document.title='New Message  ' +     {value}
        
       
}  }) 

// if we want to run  useffect at many times
//we can use  in double time



//cleanup function

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
return(
<>
<h1>{value}</h1>
<button onClick={()=>setvalue(value+1)}>clik me</button>

</>




)


}