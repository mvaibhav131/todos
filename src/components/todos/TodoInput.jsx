
import React, { useState } from 'react'
import {v4 as uuid} from "uuid";
import { addTodo } from '../../redux/todo/action';
import { useDispatch } from 'react-redux';

export const TodoInput = () => {
    const [title,setTitle]=useState("");
    const dispatch=useDispatch();
    const handleAdd =()=>{
        const payload={
            id:uuid(),
            title,
            status:false
        };
       dispatch(addTodo(payload));
       setTitle("")
    };
  return (
    <div>
      <input type="text" placeholder='Add New Todo' value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  )
}


