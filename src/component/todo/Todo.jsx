

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodosLoading,getTodosSuccess,getTodosError } from '../../redux/todo/action';
import {TodoInput} from './TodoInput'
import {TodoItem} from './TodoItem'


const Todo = () => {
    const {loading,error,todos}=useSelector((state)=>state.todos);
    const dispatch=useDispatch();

    React.useEffect(()=>{
      dispatch(getTodosLoading());
      fetch(`http://localhost:3005/todos`)
        .then((res)=>res.json())
        .then((res)=> dispatch(getTodosSuccess(res)))
        .catch((err)=>dispatch(getTodosError()))
    },[dispatch])

  return loading ? (<h1>Loading....</h1>) : error ? (<h1>Error .. Something went wrong...</h1>) :(
      <>
      <TodoInput/>
      <br />
      {todos.map((todo)=>(<TodoItem key={todo.id} {...todo}/>
      ))}
      </>
  );
};

export default Todo
