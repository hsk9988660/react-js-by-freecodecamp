import React from 'react';
import { useState } from 'react/cjs/react.development';
import { Book } from './book';
import { Card } from './Card';
export const Books=()=>{
    const [use,setuse]=useState(Book)
 return  (
<div>
{Book.map((book,index)=>{
return <Card
{...book}
key={book.id}
/>


})

}




</div>


 )

}