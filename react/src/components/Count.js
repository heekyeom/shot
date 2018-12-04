import { Statistic } from 'semantic-ui-react'
import React, { Component } from 'react'
var request = require('request');

export default class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: { dailyShot: [], monthShot: [], yearShot: [{}] }
      // data: [{ dailyShot: [] }],
    };
    this.loadDetailData()
  }

  loadDetailData = () => {
    const parent = this;
    request(`https://sam-hap.herokuapp.com/detail/아이유`, function (error, response, body) {
      body = JSON.parse(body);
      console.log(body);
      parent.setState({
        data: body
      });
    });
  }
  render() {

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    return (
      <div class="Count">
        <Statistic.Group>
          <Statistic>
            <Statistic.Value>{this.state.data.dailyShot[dd]}</Statistic.Value>
            <Statistic.Label>Today</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{this.state.data.monthShot[mm]}</Statistic.Value>
            <Statistic.Label>Month</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{this.state.data.yearShot[0]['shot']}</Statistic.Value>
            <Statistic.Label>Year</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </div>
    )
  }
}

