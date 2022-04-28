

import React, { useState } from 'react'
import {v4 as uuid} from "uuid";
import { getTodosError,getTodosLoading,getTodosSuccess} from '../../redux/todo/action';
import { useDispatch, useSelector } from 'react-redux';

export const TodoInput = () => {
    const [title,setTitle]=useState("");
    const {loading,error,todos}=useSelector((state)=>state.todos);
    const dispatch=useDispatch();
    const handleAdd =()=>{
        const payload={
            id:uuid(),
            title,
            status:false
        };
      fetch(" http://localhost:3005/todos",{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
          "Context-Type":"application/json"
        }
      }).then(()=>{ 
        dispatch(getTodosLoading())
        fetch(`http://localhost:3005/todos`)
        .then((res)=>res.json())
        .then((res)=> dispatch(getTodosSuccess(res)))
        .catch((err)=>dispatch(getTodosError()))
      })
       setTitle("")
    };
  return (
    <div>
      <input type="text" placeholder='Add New Todo' value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  )
}


