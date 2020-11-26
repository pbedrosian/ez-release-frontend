import { connect } from 'react-redux'
import ReleaseNav from '../Components/releaseNav'
import ReleaseCard from '../Components/ReleaseCard'

import React, { Component } from 'react'
import { CardDeck, Container } from 'react-bootstrap'

class releaseContainer extends Component {

    state = {
        name: '',
        email: '',
        status: 'All'
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    filterReleases = () => {
        let releaseStatus = () => {
            if (this.state.status === 'Pending') {
                return false 
            } else if (this.state.status === 'Signed') {
                return true
            } else {
                console.log('test')
            }
        }
        let filteredName = this.props.releaseForms.filter(r => r.clientFirstName.startsWith(this.state.name))
        let filteredEmail = filteredName.filter(r => r.clientEmail.startsWith(this.state.email))

        if (this.state.status !== 'All') {
            let finalFilter = filteredEmail.filter(r => r.signed === releaseStatus())
            return finalFilter
        } else {
            return filteredEmail
        }
        

    }

    render() {
        let filtered = this.filterReleases()
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

