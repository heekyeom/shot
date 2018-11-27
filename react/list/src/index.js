import React, { Component } from "react";
import ReactDOM from "react-dom";
import List from "./List";
import Search from "./Search";
import Bottom from "./Bottom";
import './index.css';



//app.use(express.static('public'));

class App extends React.Component {
    constructor (props) {
        super(props);

        this.state ={
            lat : null,
            errorMessage:''
        };
    }

    // list 
    render() {
        return (
            <div class = "listpage">
                <h2>총있으면 쐈다 리스트페이지 공사중..</h2>
            <Search/>
            <List/>
            <Bottom/>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector("#root"));
