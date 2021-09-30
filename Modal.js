import React from 'react'
import { useEffect } from 'react'

export const Modal = ({modall,closeModal}) => {
  useEffect(()=>{
setTimeout(()=>{
closeModal()

},2000)

  })
  return (
    <>
      <h1> {modall}</h1>
    </>
  )
}


