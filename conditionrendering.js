import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
// we use "rfe" to directly rewrite the component
// it automatically write our function

//condition rerendering

// multiple return in one component
const url="https://api.github.com/users/mojombo"
const  Condition = () => {
const [use,setuse]=useState(true)
const[error,seterror]=useState(false)
const [usee,setusee]=useState([])

useEffect(()=>{
fetch(url).then((res)=>{
res.json()

}).then((user)=>{
  const {login}=user;
 setusee(login)



}).catch((ee)=>{

  console.log(ee);
})


},[])


if (use) {
  return <h1>Loading</h1>
} if (error) {
  return <h1>error</h1>
}else{
return <h1>khan</h1>

}








}



 

// it means we can return multiple times 

// we can screen short by pressing" window key and w"

export default  Condition
