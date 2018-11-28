import React from "react";
import { Icon } from "semantic-ui-react";

class Shot_detail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    // list 
    render() {
        return (
            <div class="Shot_detail">
                <Icon className="arrow left" />
                <h2>피격 현황</h2>
            </div>

        );
    }
}

export default Shot_detail;