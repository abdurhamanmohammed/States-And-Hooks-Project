import React, { Component } from 'react'

export default class CounterDisplayer extends Component {
  render() {
    return (
      <div>
         <h1>The count value is :{this.props.clicks}</h1>
      </div>
    )
  }
}
