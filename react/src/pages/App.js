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
            rank: [],
        };

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
