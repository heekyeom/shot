// import React, { Component } from 'react'
// import { Button, Progress } from 'semantic-ui-react'

// export default class HProgress extends Component {

//   render() {
//     return (
//       <div>
//         <h3>HP {this.state.percent}/100</h3>
//         <Progress percent={this.state.percent} HP />
//         <Button onClick={this.increment}>decrement</Button>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'
import { Button, Progress } from 'semantic-ui-react'

export default class ProgressExampleIndicating extends Component {
  state = { percent: 90 }

  increment = () =>
    this.setState({
      percent: 0 < this.state.percent ? this.state.percent - 1 : 100,
    })
  render() {
    return (
      <div>
        <h3>HP {this.state.percent}/100</h3>
        <Progress percent={this.state.percent} indicating />
        <Button onClick={this.increment}>피격 될때 액션</Button>
      </div>
    )
  }
}
