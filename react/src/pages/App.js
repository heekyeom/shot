import React from "react";
import Home from './Home';
import ShotDetail from './ShotDetail';
import Setting from './Setting';

//app.use(express.static('public'));

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 'Home',
            name: 'test'
        };

    }
    changePage = (pageId) => {
        this.setState({
            page: pageId,
        })
    }

    changeName = (nameId) => {
        this.setState({
            name: nameId,
        })
    }



    handlePage() {
        switch (this.state.page) {
            case 'Home':
                return <Home
                    page={this.changePage}
                //name={this.changeName}
                />
            case 'ShotDetail':
                return <ShotDetail
                    page={this.changePage}
                //name={this.changeName}
                />
            case 'Setting':
                return <Setting page={this.changePage} />
        }
    }


    render() {
        return (
            <div class="Appdiv">
                {this.handlePage()}
            </div>
        );
    }
}

export default App;
