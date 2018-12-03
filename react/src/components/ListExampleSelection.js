import React, { Component } from 'react'
import { List, FeedExtra } from 'semantic-ui-react'

var request = require('request');

// var url = require('url');
// var qs = require('querystring');

// var data = async () => {
//   await request('https://sam-hap.herokuapp.com/ranking/', function (error, response, body) {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.    
//   });
// }
var data;
request('https://sam-hap.herokuapp.com/ranking/', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    data = JSON.parse(body);
  });
console.log(data);
// console.log(data.name);

class ListExampleSelection extends Component {
  change = () => {
    this.props.page('ShotDetail');
  }

  
  render() {
    return (
      <List selection verticalAlign='middle'>
        <List.Item>
          <List.Content onClick={this.change}>
            <List.Header>
              <pre class="preblack">                  1591</pre>
            </List.Header>
          </List.Content>
        </List.Item>



      </List>
    )
  }
}

export default ListExampleSelection;

