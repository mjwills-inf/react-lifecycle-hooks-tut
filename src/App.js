import './App.css';
import Counter from './components/counter'

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mount:true
    }

    this.mountCounter = () => this.setState({mount: true})
    this.unmountCounter = () => this.setState({mount: false})
  }

  render() {
    return (
      <div>
        <button onClick={this.mountCounter}>Mount Counter</button>
        <button onClick={this.unmountCounter}>Unmount Counter</button>
        {this.state.mount ? <Counter /> : null} 
      </div>
    )
  }
}


