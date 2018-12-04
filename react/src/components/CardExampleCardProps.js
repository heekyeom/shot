import { Card, Icon } from 'semantic-ui-react'
import React, { Component } from 'react'

export default class CardExampleCardProps extends Component {

  
  render() {

    const extra = (
      <a>
        <Icon name='heart' />
        <b>TOTAL</b> 12,373  shot
      </a>
    )
    return (
      <Card
    image='/images/아이유.jpg'
    header={this.props.name}
    meta='가수'
    description='나쁜 사람인가봐요. 총을 많이 맞았네'
    extra={extra}
  />
    )
  }
}
