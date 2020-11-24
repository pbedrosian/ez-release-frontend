import { connect } from 'react-redux'
import ReleaseNav from '../Components/releaseNav'
import ReleaseCard from '../Components/ReleaseCard'

import React, { Component } from 'react'
import { CardDeck, Container } from 'react-bootstrap'

class releaseContainer extends Component {

    state = {
        name: '',
        month: '',
        year: ''
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        debugger
        let filtered = this.props.releaseForms.filter(r => r.clientFirstName.startsWith(this.state.name))
        // const releaseCards = this.props.releaseForms.map(form => {
            const releaseCards = filtered.map(form => {
            return (
                <ReleaseCard data={form} style={{flex: 1}} key={form.id} />
            )
        })
        return (
            <div>
                <ReleaseNav changeState={this.handleOnChange} state={this.state} />
                <Container >
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

