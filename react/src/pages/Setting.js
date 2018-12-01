import React, { Component } from 'react'

import About from "../components/About"
import BackButton from "../components/BackButton";
import TransitionExampleSingleExplorer from "../components/TransitionExampleSingleExplorer";
class Setting extends Component {

  render() {
    return (
      <div class ="Setting">
        <BackButton page={this.props.page}/>
        <TransitionExampleSingleExplorer/>
        <About/>
      </div>
    )
  }
}

export default Setting;
