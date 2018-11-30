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
            page: null, // 아모른직다, but 들어온다.
        };

        // this._changeToChild =this._changeToChild.bind(this);
        // this._changeFromChild = this._changeFromChild.bind(this);
    }

    handlePage() {
        switch (this.state.page) {
            case null:
                return <Home />
            case 'ShotDetail':
                return <ShotDetail />
            case 'Setting':
                return <Setting />
        }
    }

    render() {
        return (
            <div>
                <Home />
                <Route exact path="/" component={Home} />
                <Route exact path="/ShotDetail" component={ShotDetail} />
                <Route exact path="/Setting" component={Setting} />
                {this.handlePage()}
            </div>
        );
    }
}

export default App;
