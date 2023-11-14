import React, { Component } from 'react'
import CounterDisplayer from './CounterDisplayer';
import EvenCounterDisplay from '../EvenCounterDisplay';
export default class Mycounter extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
   allClicksCounter=()=>{
    this.setState((x)=>{return {count:x.count+1}})
    
   }
   
   
  render() {
    return (
      <div>
        
        <button onClick={this.allClicksCounter}>count</button>
        <CounterDisplayer clicks={this.state.count}/>
        <EvenCounterDisplay evenclicks={this.state.count}/>
      </div>
    )
  }
}
