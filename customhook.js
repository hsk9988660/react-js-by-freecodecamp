import { useEffect,useState } from "react";


export const useFetch=(url)=>{
    const [loading,setloading]=useState(true)
    const [products,setproducts]=useState([])
    
    const getproduct=async()=>{
    const response=await fetch(url)
    const use=await response.json()
    
    setproducts(use)
    setloading(false)
    }
    useEffect(()=>{
    getproduct()
    
    },[url])
    return {loading,products}





}