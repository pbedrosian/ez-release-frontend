import React, { Component } from 'react'

import { connect } from 'react-redux'

class App extends Component {

  componentDidMount = () => {
    console.log("ALL STATE")
    console.log(this.props.allState)
  }
  render() {
    return (
    <div className="App">
        THIS IS HOME
    </div>
    )
  }
}

const mSTP = (state) => {
  return {
    allState: state
  }
}

export default connect(mSTP)(App)

