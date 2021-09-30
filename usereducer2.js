import React, { useReducer } from 'react'


const reducer=(state,action)=>{
  if (action.type=== 'increament') {
      return state+1
  }
  if (action.type=== 'decrement') {
      return state-1
  }
return state;


}
const initialvalue=0
const Use = () => {
const [state,dispatch]=useReducer(reducer,initialvalue)





  return (
    <>
   <p>{state}</p>
     <button   onClick={()=>dispatch({type:"increament"})}>+</button>
     <button   onClick={()=>dispatch({type:"decrement"})}>-</button>
    </>
  )
}

export default Use
