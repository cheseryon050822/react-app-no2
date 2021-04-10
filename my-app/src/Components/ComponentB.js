import React from 'react';
import {BrowserRouter as Router,Link, Switch,useHistory} from 'react-router-dom';

const ComponentB = () =>{
    const history= useHistory()
    const joumon = () => {
        history.push("/")
        }
    const  heian= () => {
        history.push("/ComponentC")
    }
    return(
　　<Router>
      <Switch>
      <div>
      <button onClick={joumon}>ComponentAへ移動</button>
      <button onClick={heian}>ComponentCへ移動</button>  
        </div>
        </Switch>
     </Router>
    );
};

export default ComponentB;