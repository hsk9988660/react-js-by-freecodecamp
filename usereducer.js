import React, { useReducer } from 'react'
import { useState } from 'react/cjs/react.development'

import { Modal } from '../Modal'
import { Data } from '../usecontex/data'
import { reducer } from './reducer'
const initialstate={
people:[],
isModalopen:false,
modalContent:""




}


const UseR = () => {
  const [name,setname]=useState('')
 const [state,dispatch]=useReducer(reducer,initialstate)
 




  const handle=(e)=>{
e.preventDefault()
if (name) {
  const newItem={id:new Date().getTime().toString(),name}
dispatch({type:"running"  , payload:newItem})
setname("")

} else {
dispatch({type:"novalue"})
}

  }
  const closeModal=()=>{
dispatch({type:"closemodal"})

  }
  return (
    <>
   {state.isModalopen &&  <Modal   modall={state.modalContent}
    closeModal={closeModal}     />}
<form   onSubmit={handle}>
<div>
<input type="text"   value={name}   onChange={(e)=>setname(e.target.value)}/>


</div>
<button  className='btn'>Add</button>






</form>
{state.people.map((person)=>{


return(<div key={person.id}>
<h1>{person.name}</h1>
<button    onClick={()=>{
dispatch({type:'removeitems',payload:person.id})


}}>remove items</button>

</div>)

})}


    </>
  )
}

export default UseR
