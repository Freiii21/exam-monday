import {combineReducers, createStore, applyMiddleware } from "redux";
import {Reducer} from './reducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    counter: Reducer
})

/*
let preloadedState;
const persistedCounterString = localStorage.getItem('counterValues')
if (persistedCounterString){
    preloadedState = JSON.parse(persistedCounterString)
}
*/

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof rootReducer>



// store.subscribe(() => {
//     localStorage.setItem('counterValues', JSON.stringify(store.getState().counter.settingParameters))
// })



//@ts-ignore
window.store = store;