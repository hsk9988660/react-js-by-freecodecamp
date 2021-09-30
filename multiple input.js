import React from 'react'
import { useState } from 'react/cjs/react.development'

const Input = () => {
const [person,setperson]=useState({firstname:"",email:"",age:""})
const [people,setpeople]=useState([])


const handleinput=(e)=>{
// const [name,value]=e.target
const name=e.target.name
const value=e.target.value
setperson({
...person,[name]:value,



})


    
}

const submit=(e)=>{
e.preventDefault()
if (person.firstname && person.email && person.age) {
const newperson={
...person,
id:new Date().toString()

}


  
  setpeople([...people,newperson])
  setperson({firstname:"",email:"",age:""})
}




}


  return (
    <>
    <form    className='form'    >
  <div class="form-group" >

    <label for="exampleInputEmail1">  enter name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='firstname' value={person.firstname}    onChange={handleinput} />
  </div>
  <div class="form-group">

    <label for="exampleInputPassword1">enter email</label>
    <input type="email" class="form-control" id="exampleInputPassword1"  name='email' value={person.email}   onChange={handleinput}/>
  </div>
  <div>
    <label for="exampleInputPassword1">enter   age</label>
    <input type="number" class="form-control" id="exampleInputPassword1"  name='age' value={person.age}  onChange={handleinput}/>
  </div>
 
  <button type="submit" class="btn btn-primary"  onClick={submit}>Submit</button>
</form>


{people.map((info)=>{
const {id,firstname,email,age}=info
return (<div   key={id}>
<h1  >{firstname}</h1>
<h2>{email}</h2>
<h3>{age}</h3>
</div>

)})}
    </>
  )
}

export default Input
