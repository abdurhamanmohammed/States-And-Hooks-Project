import React, { Component } from 'react'

export default class EvenCounterDisplay extends Component {
    shouldComponentUpdate (nextProps, nextState) {
        if (nextProps.evenclicks % 2 === 0) return true
      }
    
  render() {
    return (
      <div>
          <h1>The even count value is :{this.props.evenclicks}</h1>
      </div>
    )
  }
}
