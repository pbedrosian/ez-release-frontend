import React from 'react'
import { Container } from 'react-bootstrap'
import ReleaseFormInput from '../Components/ReleaseFormInput'

export default function NewReleaseContainer(props) {
    return (
        <div>
            <br />
            <Container>
            <h1>New Photo Release</h1>
            <br />
            <h3>Enter Client Info:</h3>
                <br />
                <ReleaseFormInput history={props.history} />
                <br />
             </Container>
        </div>
    )
}
