import React from 'react'
import { useState } from 'react/cjs/react.development'
//onchange and value in for m are very important


// controlled input form
const Form = () => {
 
const [firstname,setfirstname]=useState()
const [email,setemail]=useState()
const [people,setpeople]=useState([])


const onhandle=(e)=>{
e.preventDefault()
 const person =[firstname,email]     
    if (firstname && email) {
      setpeople((pp)=>
    {
     return  [...pp,person]


    })
    setfirstname('')
    setemail('')
    }else{
     return 'error'


    }


  }

  return (
    <>
<form    className='form'  onSubmit={onhandle}    >
  <div class="form-group" >

    <label for="exampleInputEmail1">  enter name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='firstname' value={firstname}   onChange={(e)=>setfirstname(e.target.value)} />
  </div>
  <div class="form-group">

    <label for="exampleInputPassword1">enter email</label>
    <input type="email" class="form-control" id="exampleInputPassword1"  name='email' value={email}  onChange={(e)=>setemail(e.target.value)}/>
  </div>
 
  <button type="submit" class="btn btn-primary"  >Submit</button>
</form>


{people.map((info)=>{
const [firstname,email]=info
return <div>
<h1  >{firstname}</h1>
<h2>{email}</h2>
</div>

})}



    </>
  )
}
// controlled and uncontrloed input
export default Form
