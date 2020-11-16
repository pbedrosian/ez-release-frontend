import { connect } from 'react-redux'
import ReleaseNav from '../Components/releaseNav'
import ReleaseCard from '../Components/ReleaseCard'

import React, { Component } from 'react'
import { CardDeck, Container } from 'react-bootstrap'

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
                <Container center>
                <h1>All Release Forms:</h1>          

                    <CardDeck style={{alignItems: 'center'}}>
                        {releaseCards}
                    </CardDeck>
                </Container>
            </div>
        )
    }
}

const mSTP = (state) => ({
    releaseForms: state.releases
})

export default connect(mSTP)(releaseContainer)

