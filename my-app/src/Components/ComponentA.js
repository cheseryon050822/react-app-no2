import React,{useState,useEffect,useContext} from 'react';
import {BrowserRouter as Router,Switch,useHistory} from 'react-router-dom';
import {hail} from '../actions';
import axios from 'axios'
import { Table } from 'react-bootstrap';
import {Store} from '../store/index'
const ComponentA = () => {
  const [count]=useState(0)
  const history= useHistory()
  const {globalState,setGlobalState}=useContext(Store);
  const ComponentB = () => {
      history.push("/ComponentB")
    }
    const ComponentC = () => {
      history.push("/ComponentC")
    }
    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res =>  {
        console.log(res,'res check') 
      setGlobalState({
        type:hail
      })
    })
  　},
  　[])
    return(
      <Router>
        <Switch>
      <div>
        <button onClick={ComponentB}>ComponentBへ移動(エラー発生中)</button>
        <button onClick={ComponentC}>ComponentCへ移動</button>
        <div>count:{count}</div>
        </div>
        </Switch>
        </Router>
      );
};

export default ComponentA