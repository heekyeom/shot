import React, { Component } from 'react'
import { List} from 'semantic-ui-react'

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

  handleData = () => {
    this.props.page('ShotDetail');
    // this.props.name('IU'); // 다시 테스트
  }


  render() {
    let i = 1;
    const list = this.state.data.map(d => {
      return (
        <List.Item onClick={this.handleData}>
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

