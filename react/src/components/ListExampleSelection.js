import React, { Component } from 'react'
import { List } from 'semantic-ui-react'


export default class ListExampleSelection extends Component {
  change=()=>{
    this.props.page('ShotDetail');
  }
  render() {
    return (
      <List selection verticalAlign='middle'>
      <List.Item>
        <List.Content>
          <List.Header onClick={this.change}>
            <pre class="preblack">1. 아이유                     1591</pre>
          </List.Header>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Content>
          <List.Header onClick={this.change}>
            <pre class="preblack">2. 함용재                     1431</pre>
          </List.Header>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Content>
          <List.Header onClick={this.change}>
            <pre class="preblack">3. 김희겸                     1291</pre>
          </List.Header>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Content>
          <List.Header onClick={this.change}>
            <pre class="preblack">4. 아이유                      793</pre>
          </List.Header>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Content>
          <List.Header onClick={this.change}>
            <pre class="preblack">5. 아이유                      541</pre>
          </List.Header>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Content>
          <List.Header onClick={this.change}>
            <pre class="preblack">6. 아이유                      321</pre>
          </List.Header>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Content>
          <List.Header onClick={this.change}>
            <pre class="preblack">7. 아이유                      197</pre>
          </List.Header>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Content>
          <List.Header onClick={this.change}>
            <pre class="preblack">8. 아이유                      123</pre>
          </List.Header>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Content>
          <List.Header onClick={this.change}>
            <pre class="preblack">9. 아이유                       76</pre>
          </List.Header>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Content>
          <List.Header onClick={this.change}>
            <pre class="preblack">10. 아이유                      52</pre>
          </List.Header>
        </List.Content>
      </List.Item>

    </List>
    )
  }
}
