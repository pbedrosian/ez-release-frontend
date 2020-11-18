import React, { Component } from 'react'
import { connect } from 'react-redux'

import {fetchReleases} from './Actions/releaseAction'
import {fetchUsers} from './Actions/userAction'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Navigation from './Components/NavBar';
import newReleaseContainer from './Containers/newReleaseContainer'
import ReleaseContainer from './Containers/releaseContainer'
import homeContainer from './Containers/homeContainer'


class App extends Component {

  componentDidMount = () => {
    this.props.fetchReleases()
    // this.props.fetchUsers()
  }
  render() {
    console.log(this.props.allState)
    return (
      <Router>
        <div className="App">
          <Navigation/>
          <Switch>
            <Route exact path='/' component={homeContainer} />
            <Route path='/release-forms' component={ReleaseContainer} />
            <Route path='/new-release' component={newReleaseContainer} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mSTP = (state) => ({
  allState: state
})

const mDTP = (dispatch) => ({
  fetchReleases: () => dispatch(fetchReleases()),
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mSTP, mDTP)(App)

