
import { Button } from 'semantic-ui-react'

import React, { Component } from 'react'

export default class ButtonExampleCircular extends Component {
    change=()=>{
        this.props.page('Setting');
    }

    render() {
    return (
        <Button onClick={this.change} icon='settings' size="big" />
    )
  }
}

