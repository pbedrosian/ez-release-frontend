import React, { Component } from 'react'
import { Container, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import ReleasePDF from '../PDFs/ReleasePDF'
import { PDFViewer } from '@react-pdf/renderer';
import { updateRelease } from '../Actions/releaseAction'

class Release extends Component {

    handleOnClick = () => {
        if (window.confirm("You are about to mark this form as Singed. Do you wish to Continue?")) {
            this.form.signed = !this.form.signed
            this.props.updateRelease(this.form)
        }
    }
    
    form = this.props.releaseForms.find(r => r.id === parseInt(this.props.match.params.id))

    buttonStatus = () => {
        if (this.form.signed === true) {
            return 'Mark as Pending Signature'
        } else {
            return 'Mark as Signed'
        }
    }

    render() {
        return (
            <div>
            <br />
                <Container style={{height: '600px'}}>
                    <h1>Client:</h1>
                    <h4>{this.form.clientFirstName} {this.form.clientLastName} - {this.form.clientEmail}</h4>
                    <br />
                    <h2>Job:</h2>
                    <h4>{this.form.jobTitle}</h4>
                    <br />
                    <Button variant='link' onClick={this.handleOnClick}>{this.buttonStatus()}</Button>
                    <br />
                    <PDFViewer style={{width: '100%', height: "95%" }} >
                    <ReleasePDF formData={this.form} user={this.props.user} />
                    </PDFViewer>  
                </Container>
            </div>
        )
    }
}

const mSTP = (state) => ({
    releaseForms: state.releases,
    user: state.users[0]
})

const mDTP = (dispatch) => ({
    updateRelease: (obj) => dispatch(updateRelease(obj))
})

export default connect(mSTP, mDTP)(Release)
