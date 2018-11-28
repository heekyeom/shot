import React from "react";
import Shot_list from "../components/Shot_list";
import Search from "../components/Search";
import Toggle from "../components/Toggle";
import Test from "../components/Test";




//app.use(express.static('public'));

class listpage extends React.Component {
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
            <Test/>
            </div>
        );
    }
}

export default listpage;