import React from 'react';
import {BrowserRouter as Router,Link, Switch,useHistory} from 'react-router-dom';

const ComponentC = () =>{
    const history= useHistory()
    const yayoi= () => {
        history.push("ComponentB")
        }
    return(
　　<Router>
     <Switch>
         <div>
         <button onClick={yayoi}>ComponentBへ移動</button>
         </div>
     </Switch>
    </Router>
    );
};

export default ComponentC;