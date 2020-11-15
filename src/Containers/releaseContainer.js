import React from 'react'
import { connect } from 'react-redux'
import ReleaseNav from '../Components/releaseNav'

const releaseContainer = () => {
    return (
        <div>
            <ReleaseNav />
        </div>
    )
}

export default connect()(releaseContainer)
