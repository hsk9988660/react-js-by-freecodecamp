import React, { useState } from 'react'
import { useEffect } from 'react'
import {useFetch} from './customhook'
const url='https://course-api.com/react-store-products'
const UseF = () => {

const {loading,products}=useFetch(url)


  return (
    <>
      <h1>{loading ? 'loading...':"data"}</h1>
      {products.map((e)=>{
      const {image,company,description,price}=e
      return <div>
    <img src={image} alt='not visible' />
     
     <h1>{company}</h1>
     <p>{description}</p>
     <p>{price}</p>
      </div>
      })}
    </>
  )
}
//usefetch is our custom hook it is not hook in react
export default UseF
