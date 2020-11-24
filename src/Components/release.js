import React, { Component } from 'react'
import { connect } from 'react-redux'

class Release extends Component {
    render() {
        debugger
        const form = this.props.releaseForms.find(r => r.id === parseInt(this.props.match.params.id))
        return (
            <div>
               {form.clientFirstName} {form.clientLastName}
            </div>
        )
    }
}

const mSTP = (state) => ({
    releaseForms: state.releases
})

export default connect(mSTP)(Release)
