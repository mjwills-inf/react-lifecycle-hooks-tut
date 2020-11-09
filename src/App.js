import './App.css';
import Counter from './components/counter'

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mountInDom:true,
      ignoredData: 0,
      randomCount: 66
    }

    this.mountInDom = () => this.setState({mountInDom: true})
    this.unmountInDom = () => this.setState({mountInDom: false})

    this.changeIgnoredData = () => this.setState({ignoredData: Math.random()})

    this.generateRandomCount = () => this.setState({randomCount: Number.parseInt(Math.random()*100)})
  }

  render() {
    return (
      <div>
        <button onClick={this.mountInDom} disabled={this.state.mountInDom}>Mount Counter</button>
        <button onClick={this.unmountInDom} disabled={!this.state.mountInDom}>Unmount Counter</button>
        
        {this.state.mountInDom ?        
        <Counter 
          ignoredData={this.state.ignoredData}
          randomCount={this.state.randomCount}
        /> : null}
        <button onClick={this.changeIgnoredData}>Change ignoredData</button>
        <button onClick={this.generateRandomCount}>Generate Random Counter</button> 
      </div>
    )
  }
}


