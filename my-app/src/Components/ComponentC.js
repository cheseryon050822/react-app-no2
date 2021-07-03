import React,{useReducer,useContext} from 'react';
import {BrowserRouter as Router, Switch,useHistory} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import reducer from '../reducer/index';
import ComponentD from './ComponentD';

const initialCount={
    count:0
  };  
const ComponentC = () =>{
    const [state]=useReducer(reducer, initialCount);

    const history= useHistory();
    const yayoi= () => {
        history.push("ComponentB")
        }
    const soviet =()=>{
        history.push("")
    }

    return(
         <div>
         <button onClick={yayoi}>ComponentBへ移動</button>
         <Button onClick={soviet}>ComponentAへ移動</Button>
         <h1>{state.count}</h1>
         <ComponentD>
         </ComponentD>
         </div>

    );
};

export default ComponentC;