import React,{createContext}from 'react';

export const Store = createContext();

const StoreProvaider = ({children})=>{
    return <Store.Provider value="Hello world.I'm store value">{children}</Store.Provider>;
};

export default StoreProvaider;