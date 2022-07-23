import React, { Component } from 'react'

export default class Test extends Component {
  componentDidMount() {
    console.log("component did mount");
  }
  componentWillMount() {
    console.log("component will mount");
  }
  render() {
    console.log("render");
    return (
      <div><h1>Test</h1></div>
    )
  }
}
