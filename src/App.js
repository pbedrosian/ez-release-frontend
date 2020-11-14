import React, { Component } from 'react'

import { connect } from 'react-redux'

import {fetchReleases} from './Actions/releaseAction'

class App extends Component {

  componentDidMount = () => {
    this.props.fetchReleases()
  }
  render() {
    console.log("ALL STATE")
    console.log(this.props.allState)
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

const mDTP = (dispatch) => ({
  fetchReleases: () => dispatch(fetchReleases())
})

export default connect(mSTP, mDTP)(App)

