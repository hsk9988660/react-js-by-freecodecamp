import React, { useState } from 'react'
import { Data } from './data'
// how can we toggle items using usestate hook






//component must be in uppercase
//must be in function /component body
//cannot call conditionally
// we cannot call if and else condition directly inside component
// following example of hook are same in all hooks
/*export const Ustate=()=>{
const[txt,setxt]=useState('random little')
const clickhandler=()=>{
if (txt==='random little') {
    setxt('hello world')
}
else{
setxt('random little')


}


}



return(
<>
<h1>{txt}</h1>
<button onClick={clickhandler}>change title</button>



</>



)


    
}*/
  // HOW can we use map method in a function?




// we can use map method to show array
//we use usesate with map method
//we can delete array by empty the array
/*export const Ustate=()=>{
const[arr,setarr]=useState(Data)

 return(
<>
{arr.map((person)=>{
    console.log(person);
    const{ id  ,  name  }=person;
return(
<>
<div key={id}>
<h2 >{name}</h2>

</div>


</>

)


})}
<button onClick={()=>{setarr([])}}>clear value</button>
</>


 )   



}*/
// if onclick give an error too many renders we should use onclick(()=>{set()})
// above is good way to solve error

// if it give error like that TypeError: Cannot read properties of undefined (reading 'map')
// we should use set([])
 // bracket within a bracket




 // HOW to remove items one by one
 // we have filter method to delte items



 export const Ustate=()=>{
    const[arr,setarr]=useState(Data)
    const removeitems=(id)=>{
        let newarr=arr.filter((person)=>person.id!==id)// this is very important logic
        // mtlb jin ki ID nhi milty wo newarr my store krdo 
        // or jin ki id mil jaty hy wo store na kro
     setarr(newarr)


    }
     return(
    <>
    {arr.map((person)=>{
        console.log(person);
        const{ id  ,  name  }=person;
    return(
    <>
    <div key={id}>
    <h2 >{name}</h2>
    
    </div>
    
    <button onClick={()=>removeitems(id)}>clear items one by one</button>
    
    </>
    
    )
    
    
    })}
    <button onClick={()=>{setarr([])}}>clear value</button>
   
    </>
    // setarr k andr sara array hy jab ham empty kr dy to sab remove ho jy
    
     )   
    
    
    
    }