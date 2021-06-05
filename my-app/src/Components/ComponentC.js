import React,{useReducer} from 'react';
import {BrowserRouter as Router, Switch,useHistory} from 'react-router-dom';
import reducer from '../reducer/index';
import ComponentD from './ComponentD';

const initialCount={
    count:0
  };
const ComponentC = () =>{
    const [state,dispatch]=useReducer(reducer, initialCount);

    const history= useHistory(
    );
    const yayoi= () => {
        history.push("ComponentB")
        }
const increment= () =>{
    console.log('increment');
    dispatch({
      type:'INCREMENT'
    });
};
    return(
         <div>
         <button onClick={yayoi}>ComponentBへ移動</button>
         <button onClick={increment}>+</button>
         <h1>{state.count}</h1>
         <ComponentD>
         </ComponentD>
         </div>

    );
};

export default ComponentC;