import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='heart' />
    <b>TOTAL</b> 12,373  shot
  </a>
)

// 데이터 가져오면 처리할부분
const CardExampleCardProps = () => (
  <Card
    image='/images/아이유.jpg'
    header='아이유'
    meta='가수'
    description='나쁜 사람인가봐요. 총을 많이 맞았네'
    extra={extra}
  />
)

export default CardExampleCardProps