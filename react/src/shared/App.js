import React from "react";
import { List, ShotDetail,Setting } from '../pages/index';
import { Route } from 'react-router-dom';


//app.use(express.static('public'));

class App extends React.Component {
    constructor (props) {
        super(props);

        this.state ={
          
        };
    }

    // list 
    render() {
        return (
            <div>
                <Route exact path="/" component={List}/>
                <Route exact path="/ShotDetail" component={ShotDetail}/>
                <Route exact path="/Setting" component={Setting}/>
            </div>
            
        );
    }
}

export default App;