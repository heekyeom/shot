import React, { Component } from "react";
import ReactDOM from "react-dom";
import List from "./List";
import './List.css';



//app.use(express.static('public'));

class App extends Component {

    // list 
    render() {
        return (
            <List/>
        );
    }
}


ReactDOM.render(<App />, document.querySelector("#root"));
