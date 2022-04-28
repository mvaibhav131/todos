// action types inside action

export const INCREMENT ="INCREMENT";
export const DECREMENT ="DECREMENT";
export const RESET ="RESET";

export const increment=(payload)=>({
    type:INCREMENT,
    payload
});
 export const decrement=(payload)=>({
     type:DECREMENT,
     payload
 });
   
export const reset =()=>({
    type:RESET
});

//    if you use the return function then remove circular bracket
//    export const reset =()=>{
//    return {
//         type:RESET
//     }
//   }
// ES6 SYNTAX==> ({........ })