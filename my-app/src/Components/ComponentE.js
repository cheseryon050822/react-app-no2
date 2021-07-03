import React,{useContext} from 'react';
import { Component } from 'react';
import { ButtonToolbar,Table } from 'react-bootstrap';
import {INCREMENT,DECREMENT, REQUIEM,LOTTE,rapid}from '../actions/index';
import {Store} from '../store/index'
const ComponentE = () => {
    //const [data] = useContext([]);
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
    const Express=()=>{
        setGlobalState({
            type:rapid
        })
    };
console.log(globalState);     
    return(
        <div>
            <button onClick={handleClick}>+1</button>
            <h1>ComponentE.js</h1>
            <button onClick={ORIX}>-1</button>
            <button onClick={Goldexperience}>終わりがないのが終わり</button>
            <button onClick={Hansin}>な阪関無</button>
        <button>onClick={Express}</button>
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>

      <th>id</th>
      <th>title</th>
      <th>name</th>
      <th>Body</th>
    </tr>
  </thead>
  <tbody>
  { ((value) =>(
                        <tr>
                          <td>{value.userId}</td>
                            <td>{value.id}</td>
                            <td>{value.title}</td>
                            <td>{value.body}</td>
                        </tr>
                    ))}
      
  </tbody>
  </Table>
        </div>
    );
    };
export default ComponentE;