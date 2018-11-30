
import { Button } from 'semantic-ui-react'

import React, { Component } from 'react'

export default class ButtonExampleCircular extends Component {
    render() {
    return (
        <Button onClick={this.props.page} icon='settings' size="big" />
    )
  }
}

