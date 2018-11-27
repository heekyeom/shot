import React, { Component } from "react";
import Listpage from "../pages/Listpage";
import './App.css';



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
            <Listpage/>
        );
    }
}

export default App;