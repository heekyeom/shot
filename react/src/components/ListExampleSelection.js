import React, { Component } from 'react'
import { List, FeedExtra } from 'semantic-ui-react'

var request = require('request');

class ListExampleSelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [{ dailyShot: [] }],
      
    };
    this.loadData()
  }

  loadData = () => {
    const parent = this;
    request('https://sam-hap.herokuapp.com/ranking/', function (error, response, body) {
      body = JSON.parse(body);
      parent.setState({
        data: body
      });
    });
  }

  change = () => {
    this.props.page('ShotDetail');
  }

  // handleName = (name)=>{
  //   this.props.page('')
  // }

  render() {
    let i = 1;
    const list = this.state.data.map(d => {
      return (
        // <List.Item onClick={this.change} onClick={this.handleName} >
        <List.Item onClick={this.change}>
          <List.Content>
            <List.Header>
              <div><pre class="prefront">{i++}. {d.name}</pre></div><div><pre class="preback">{d.dailyShot}</pre></div>
            </List.Header>
          </List.Content>
        </List.Item>
      )
    })

    return (

      <List selection verticalAlign='middle'>
        {list}
      </List>
    )
  }
}

export default ListExampleSelection;

