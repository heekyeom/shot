import React, { Component } from 'react'
import { Form, Grid, Image, Transition } from 'semantic-ui-react'

const transitions = [
  'AK-47',
  'M4A1',
  '권총',
  '머신건',
]
const options = transitions.map(name => ({ key: name, text: name, value: name }))

export default class TransitionExampleSingleExplorer extends Component {
  state = { animation: transitions[0], duration: 100, visible: true }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { animation, duration, visible } = this.state

    return (
      <Grid columns={2}>
        <Grid.Column as={Form}>
          <Form.Select
            label='무기 선택'
            name='Volume'
            onChange={this.handleChange}
            options={options}
            value={animation}
          />
          <Form.Input
            label={`Volume: ${duration} `}
            min={1}
            max={100}
            name='duration'
            onChange={this.handleChange}
            step={1}
            type='range'
            value={duration}
          />
          <Form.Button content={visible ? '저장' : '저장완료'} onClick={this.handleVisibility} />
        </Grid.Column>

        <Grid.Column>
          <Transition.Group animation={animation} duration={duration}>
            {visible && <Image centered size='small' src='/images/gun_sample.png' />}
          </Transition.Group>
        </Grid.Column>
      </Grid>
    )
  }
}
