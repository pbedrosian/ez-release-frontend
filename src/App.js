import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchReleases} from './Actions/releaseAction'
import {fetchUsers} from './Actions/userAction'
import Navigation from './Components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from './Components/test'
import ReleaseContainer from './Containers/releaseContainer'
import Home from './Components/Home'


class App extends Component {

  componentDidMount = () => {
    this.props.fetchReleases()
    this.props.fetchUsers()
    console.log('page loaded')
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/release-forms' component={ReleaseContainer} />
            <Route path='/test' component={Test} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mSTP = (state) => {
  return {
    allState: state
  }
}

const mDTP = (dispatch) => ({
  fetchReleases: () => dispatch(fetchReleases()),
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mSTP, mDTP)(App)

