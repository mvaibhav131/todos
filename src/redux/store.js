 import {legacy_createStore as createStore} from "redux";
import {combineReducers} from "redux"
import { todosreducer } from "./todo/reducer";

 const rootReducer=combineReducers({todos:todosreducer})

 export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())