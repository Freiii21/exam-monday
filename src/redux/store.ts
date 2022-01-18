import {combineReducers, createStore, applyMiddleware } from "redux";
import {Reducer} from './reducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    counter: Reducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>


//@ts-ignore
window.store = store;