import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
export default class Back extends Component {
  change=()=>{
    this.props.page('Home');
  }
  render() {
    return (
      <Button onClick={this.change} icon='left chevron' size="big"/>
    )
  }
}
