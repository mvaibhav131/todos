import { DECREMENT, INCREMENT, RESET } from "./action";

const initialState={count:0};

export const counterReducer=(state=initialState,action)=>{
    switch(action.type){
        case INCREMENT:
            return {
               count:state.count+action.payload
            };
        case DECREMENT:
                return{
                    count:state.count-action.payload
                };
                case RESET:
                    return{
                        ...initialState
                    };
        default:
              return state;   
     }
};