import React, { Component } from 'react'
import DividerBar from "../components/DividerBar";
import About from "../components/About"
import BreadcrumbExampleLargeSize from "../components/BreadcrumbExampleBigSize";
import TransitionExampleSingleExplorer from "../components/TransitionExampleSingleExplorer";
class Setting extends Component {

  render() {
    return (
      <div>
        <BreadcrumbExampleLargeSize/>
        <TransitionExampleSingleExplorer/>
        <About/>
      </div>
    )
  }
}

export default Setting;
