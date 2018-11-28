import React, { Component } from 'react'
import { requestRecognition } from '../actions';

export default class Test extends Component {
    render() {
        requestRecognition("http://qnimate.com/wp-content/uploads/2014/03/images2.jpg")
    return (
      <div>
        <img src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg"/>
      </div>
    )
  }
}
