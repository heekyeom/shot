import React from "react";
import Shot_list from "../components/Shot_list";
import Search from "../components/Search";
import Toggle from "../components/Toggle";




//app.use(express.static('public'));

class testpage extends React.Component {
    constructor (props) {
        super(props);

        this.state ={
        };
    }

    // list 
    render() {
        return (
            <div class = "listpage">
                <h2>테스트 페이지</h2>
            
            </div>
        );
    }
}

export default testpage;