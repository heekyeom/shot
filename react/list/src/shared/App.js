import React from "react";
import { Listpage, Shot_detail } from '../pages/index';
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
                <Route exact path="/" component={Listpage}/>
                <Route path="/Shot_detail" component={Shot_detail}/>
            </div>
            
        );
    }
}

export default App;