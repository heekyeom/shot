import { Statistic } from 'semantic-ui-react'
import React, { Component } from 'react'
var request = require('request');

export default class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countdata : {dailyShot:[],monthShot:[],yearShot:[{}]}
    };
    // this.loadDetailData()
  }

  // loadDetailData = () => {
  //   const parent = this;
  //   request(`https://sam-hap.herokuapp.com/ranking/:${this.state.name}`, function (error, response, body) {
  //     body = JSON.parse(body);
  //     console.log(body);
  //     parent.setState({
  //       countdata : body
  //     });
  //   });
  // }
  render() {
    return (
      <div class="Count">
    <Statistic.Group>
      <Statistic>
        {/* <Statistic.Value>{this.state.countdata.dailyShot[3]}</Statistic.Value> */}
        <Statistic.Label>Today</Statistic.Label>
      </Statistic>
      {/* <Statistic>
        <Statistic.Value>{this.state.countdata.monthShot[12]}</Statistic.Value>
        <Statistic.Label>Month</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{this.state.countdata.yearshot[0].shot}</Statistic.Value>
        <Statistic.Label>Year</Statistic.Label>
      </Statistic> */}
    </Statistic.Group>
  </div>
    )
  }
}

