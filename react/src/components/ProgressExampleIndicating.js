import React, { Component } from 'react'
import { Button, Progress } from 'semantic-ui-react'
var request = require('request');
export default class ProgressExampleIndicating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: { dailyShot: [], monthShot: [], yearShot: [{}] },
      percent: 100
    };
    this.loadDetailData();
  }

  loadDetailData = () => {
    const parent = this;
    request(`https://sam-hap.herokuapp.com/detail/아이유`, function (error, response, body) {
      body = JSON.parse(body);

      var today = new Date();
      var mm = today.getMonth() + 1; //January is 0!
      console.log(body.monthShot[mm]);
      parent.setState({
        data: body,
        percent: 100 - body.monthShot[mm]
      });
    });
  };
  
  increment = () =>
    this.setState({
      percent: 0 < this.state.percent ? this.state.percent - 1 : 100,
    })
    
  render() {
    return (
      <div>
        <h3>HP {this.state.percent}/100</h3>
        <Progress percent={this.state.percent} indicating />
        {/* <Button onClick={this.increment}>피격 될때 액션</Button> */}
      </div>
    )
  }
}
