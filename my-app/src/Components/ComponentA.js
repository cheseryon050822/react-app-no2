import React from 'react';
import {BrowserRouter as Router,Link, Switch,useHistory} from 'react-router-dom';

const ComponentA = () => {
  const history= useHistory()
  const ComponentB = () => {
      history.push("/ComponentB")
  }
    return(
      <Router>
        <Switch>
      <div>
        <button onClick={ComponentB}>ComponentBへ移動</button>
        </div>
        </Switch>
        </Router>
      );
};

export default ComponentA