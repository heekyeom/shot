import React from "react";
import { Route } from 'react-router-dom';
import Home from './Home';
import ShotDetail from './ShotDetail';
import Setting from './Setting';

//app.use(express.static('public'));

class App extends React.Component {
    constructor(props) {
        // React.Component 의 constructor() 를 사용하고, 이어서 우리가 override.
        super(props);

        this.state = {
            page: 'Home', // 아모른직다, but 들어온다.
            rank: [],
        };

        // this._changeToChild =this._changeToChild.bind(this);
        // this._changeFromChild = this._changeFromChild.bind(this);
    }
    changePage=(what)=>{
        this.setState ({
            page : what
        })
    }

    handlePage() {
        console.log(this.state.page);
        switch (this.state.page) {
            case 'Home':
                return <Home page={this.changePage}/>
            case 'ShotDetail':
                return <ShotDetail page={this.changePage}/>
            case 'Setting':
                return <Setting page={this.changePage}/>
        }
    }

    render() {
        return (
            <div>
                {this.handlePage()}
            </div>
        );
    }
}

export default App;
