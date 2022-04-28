import { GET_TODOS_ERROR, GET_TODOS_LOADING, GET_TODOS_SUCCESS } from "./action"




const initialState={
    loading:false,
    error:false,
    todos:[]
}

export const todosreducer=(state=initialState,action)=>{
switch(action.type){
    case GET_TODOS_SUCCESS:
        return{
          ...state,
          loading:false,
          error:false,
          todos:action.payload
        };
        case GET_TODOS_LOADING:
        return{
            ...state,
            loading:true,
            error:false,
            todos:[]
        };
        case GET_TODOS_ERROR:
        return{
            ...state,
            loading:false,
            error:true,
            todos:[]
        };
        default:
            return state;
}
};