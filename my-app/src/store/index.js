import React,{createContext,useReducer}from 'react';
import reducer from '../reducer/index';
const initialState={
    count:0
};

export const Store = createContext({
globalState: initialState,
setGlobalState: () => null
});

const StoreProvaider = ({children})=>{
    const [globalState,setGlobalState]=useReducer(reducer,initialState)
    return <Store.Provider value={{globalState,setGlobalState}}>{children}</Store.Provider>;
};

export default StoreProvaider;