import { connect } from 'react-redux'
import ReleaseNav from '../Components/releaseNav'
import ReleaseCard from '../Components/ReleaseCard'

import React, { Component } from 'react'
import { CardDeck } from 'react-bootstrap'

class releaseContainer extends Component {
    render() {
        const releaseCards = this.props.releaseForms.map(form => {
            return (
                <ReleaseCard data={form} style={{flex: 1}} />
            )
        })
        return (
            <div>
                <ReleaseNav />
                <div>
                    <CardDeck style={{alignItems: 'center'}}>
                        {releaseCards}
                    </CardDeck>
                </div>
            </div>
        )
    }
}

const mSTP = (state) => ({
    releaseForms: state.releases
})

export default connect(mSTP)(releaseContainer)

