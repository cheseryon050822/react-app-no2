import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Switch,useHistory} from 'react-router-dom';
import axios from 'axios'

const ComponentA = () => {
  const [count]=useState(0)
  const history= useHistory()
  const ComponentB = () => {
      history.push("/ComponentB")
    }
    const ComponentC = () => {
      history.push("/ComponentC")
    }
    useEffect(() => {
    console.log('useEffectが呼び出されました。')
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        console.log(res,'res check')
    })
    }, [])
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