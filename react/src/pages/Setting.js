import React, { Component } from 'react'
import DividerBar from "../components/DividerBar";
import About from "../components/About"
import Button from "../components/Button";
import TransitionExampleSingleExplorer from "../components/TransitionExampleSingleExplorer";
class Setting extends Component {

  render() {
    return (
      <div class ="Setting">
        <Button page={this.props.page}/>
        <TransitionExampleSingleExplorer/>
        <About/>
      </div>
    )
  }
}

export default Setting;
