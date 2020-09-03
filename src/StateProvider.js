/*creating the data layer with context api instead of redux */

//to track the shopping cart values
import React,{ createContext,useContext,useReducer} from "react";



export const StateContext = createContext();

//build a provider to wrap entire app insied provide for access to data layer

export const StateProvider = ({reducer,initialState,children})=>(
<StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
</StateContext.Provider>);

export const useStateValue = () => useContext(StateContext);