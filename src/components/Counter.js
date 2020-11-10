import React, { Component } from 'react'
import ErrorComponent from './ErrorComponent'

export default class Counter extends Component {
  
  constructor (props) {
    console.log("constructor run")
    super(props)
    this.state = {
      counter: 0,
      randomCount: 0,
      initialising: true
    }    
    this.increase = () => this.setState({counter: this.state.counter+1})
    this.decrease = () => this.setState({counter: this.state.counter-1})    
  }

  // returns state setting (copy props into state)
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps run")
    if(props.randomCount && state.randomCount !== props.randomCount) {
      return {
        counter: props.randomCount,
        randomCount: props.randomCount
      }
    }
    return null
  }

  // called once when mounted into DOM. handle initial loading, network requests
  // demo async request with setTimeout
  componentDidMount() {
    console.log("componentDidMount run")
    setTimeout(() => {
      this.setState({initialising: false})
    }, 500);
  }

  // capture some properties that are not stored in state before re-render
  // a list view, or mouse being in a certain position before something changing
  // returns snapshot that can be passed to DidUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null
  }

  // componentDidMount, componentDidUpdate, componentWillUnmount most commonly used
  /////////////////////////////////////////////////////////////////////////////////

  // default return true, purpose to conclude if render should be triggered (performance)
  // checking if nextProps (so a change to the data we want to ignore) 
    // and if the value is differnet to the current props 
    shouldComponentUpdate(nextProps, nextStates) {
      console.log("shouldComponentUpdate run")
      if(nextProps.ignoredData &&
        this.props.ignoredData !== nextProps.ignoredData) {
          return false
        }
      return true 
    }

  render() {
    console.log("render run")

    if(this.state.initialising) {
      return <div>Intialising...</div>
    }

    if (this.state.error) {
      console.log(this.state.error)
      return <div>We have encountered an error1</div>
    }
    
    return (
      <div>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
        <div>
          Counter: {this.state.counter}
        </div>
        <ErrorComponent />
      </div>
    )
  }

  

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate run")
    console.log("args of componentDidUpdate:", {prevProps, prevState, snapshot})
  }

  componentWillUnmount() {
    console.log("componentWillUnmount run")
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch run')

    this.setState({error: info})
  }
  
  
}
