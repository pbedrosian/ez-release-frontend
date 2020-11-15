import React from 'react'
import { Container } from 'react-bootstrap'
import ReleaseFormInput from '../Components/ReleaseFormInput'
import FormExample from '../Components/testForm'

export default function newReleaseContainer() {
    return (
        <div>
            {/* <ReleaseFormInput /> */}
            <br />
            <br />
            <Container>
                <FormExample />
            </Container>
        </div>
    )
}

