import React, { Component } from "react";
import ReactDOM from "react-dom";
import Shot_list from "./Shot_list";
import Search from "./Search";
import Toggle from "./Toggle";
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
            <div class = "listpage">
                <h2>총있으면 쐈다 리스트페이지 공사중..</h2>
            <Search/>
            <Shot_list/>
            <Toggle/>
            </div>
        );
    }
}

export default App;