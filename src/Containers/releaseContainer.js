import { connect } from 'react-redux'
import ReleaseNav from '../Components/releaseNav'
import ReleaseCard from '../Components/ReleaseCard'

import React, { Component } from 'react'

class releaseContainer extends Component {
    render() {
        const releaseCards = this.props.releaseForms.map(form => {
            return (
                <ReleaseCard data={form} />
            )
        })
        return (
            <div>
                <ReleaseNav />
                <div className='releaseCards'>
                    {releaseCards}
                </div>
            </div>
        )
    }
}

const mSTP = (state) => ({
    releaseForms: state.releases
})

export default connect(mSTP)(releaseContainer)

