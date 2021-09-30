import React, { useEffect } from "react"
import { useState } from "react/cjs/react.development"
// const url="https://api.github.com/users"
import { Api } from "./api"
export const FetchData=()=>{

// const [set,useset]=useState([])

// const getuser=async()=>{
// const response=await fetch(url)
// const user=await response.json()
// useset(user)

// }
// useEffect(()=>{
// getuser()

// },[])


return(
<>
<ul>
{Api.map((user)=>{
    const{login,id,html_url,avatar_url}=user
return <li key={id}>

<img src={avatar_url} alt={login} />
<div>
    <h2>{login}</h2>
</div>
<div>

    <a href={html_url}>qq</a>
</div>

</li>

})}

</ul>





</>
)





}