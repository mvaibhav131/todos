import React from 'react'
import { useDispatch, useSelector,} from 'react-redux'
import { increment,decrement,reset } from '../../redux/counter/action';

// useSelector---> to get global state;
// use Dispatch---> to update the global state;
const Counter = () => {
    const dispatch=useDispatch();
    const count=useSelector((state)=>state.count.count)
    console.log(count);
  return (
    <div>
     <h1>count:{count}</h1>
     <button onClick={()=>dispatch(increment(3))}>Increment by 3</button>
     <button onClick={()=>dispatch(decrement(2))}>Decrement by 2</button>
     <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter
