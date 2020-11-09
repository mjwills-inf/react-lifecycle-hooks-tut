import React, { Component } from 'react'

// demo component to force error BUT DOES NOT work 

export default class ErrorComponent extends Component {
  render() {
    return (
      <div>
        { this.props.thisDoesntExist }
      </div>
    )
  }
}
