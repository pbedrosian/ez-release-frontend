import React from 'react'
import { Container } from 'react-bootstrap'
import ReleaseFormInput from '../Components/ReleaseFormInput'
import PDF from '../Components/PDF'

export default function newReleaseContainer() {
    return (
        <div>
            <br />
            <Container>
            <h1>New Photo Release</h1>
            <br />
            <h3>Enter Client Info:</h3>
                <br />
                <ReleaseFormInput />
                {/* <TestForm /> */}
                <PDF />
             </Container>
        </div>
    )
}
