        export const reducer=(state,action)=>{


    if (action.type === 'running') {
  
      const newpeople=[...state.people,action.payload]
      return{ ...state,
        people:newpeople,
        isModalopen:true,
     modalContent:"add items"
    }
    }if (action.type==='novalue') {
      return{...state,isModalopen:true  ,    modalContent:"please add items"}
    }if (action.type==='closemodal') {
      return{...state,isModalopen:false}
    }if (action.type==='removeitems') {
      const newpeople=state.people.filter((p)=>
    p.id!==action.payload
  
    
  
       )
      return {...state,people:newpeople}
    }
    else{
  return
  throw new Error('not matching')
  
  
    }
  }