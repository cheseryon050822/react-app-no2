import React,{useContext} from 'react';
import { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import {INCREMENT,DECREMENT, REQUIEM, LOTTE}from '../actions/index';
import {Store} from '../store/index'
const ComponentE = () => {
    const {globalState,setGlobalState}=useContext(Store);
    const handleClick = ()=>{
        setGlobalState({
        type: INCREMENT
    })};
    const ORIX= ()=>{
        setGlobalState({
        type: DECREMENT
    })};
    const Goldexperience=()=>{
        setGlobalState({
        type:REQUIEM
    })};
    const Hansin=()=>{
        setGlobalState({
        type:LOTTE
    })};
console.log(globalState);     
    return(
        <div>
            <button onClick={handleClick}>+1</button>
            <h1>ComponentE.js</h1>
            <button onClick={ORIX}>-1</button>
            <button onClick={Goldexperience}>終わりがないのが終わり</button>
            <button onClick={Hansin}>な阪関無</button>
        </div>
    );
    };
export default ComponentE;