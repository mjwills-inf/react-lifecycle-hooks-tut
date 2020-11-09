import React, { Component } from 'react'

export default class Counter extends Component {
  constructor (props) {
    console.log("constructor run")
    super(props)

    this.state = {
      counter: 0
    }
    
    this.increase = () => this.setState({counter: this.state.counter+1})
    this.decrease = () => this.setState({counter: this.state.counter-1})    
  }

  componentDidMount() {
    console.log("componentDidMount run")
  }

  

  componentWillUnmount() {
    console.log("componentWillUnmount run")
  }

  render() {
    console.log("render run")
    return (
      <div>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
        <div>
          Counter: {this.state.counter}
        </div>
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate run")
    console.log("args of componentDidUpdate:", {prevProps, prevProps, snapshot})
  }
}
