import React from "react";
import ListExampleSelection from "../components/ListExampleSelection";
import Search from "../components/Search";
import Toggle from "../components/Toggle";
import DividerBar from "../components/DividerBar";
import ButtonExampleCircular from '../components/ButtonExampleCircular'


//app.use(express.static('public'));

class Home extends React.Component {


    render() {
        console.log(this.props);
        return (
            <div class="listpage">
                <h2>총있으면 쐈다</h2>
                <ButtonExampleCircular page={this.props.page}/>
                <Search />
                <DividerBar />
                <ListExampleSelection />
                <DividerBar />
                <Toggle />
            </div>
        );
    }
}

export default Home;
