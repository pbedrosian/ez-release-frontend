import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap';


export default class ReleaseFormInput extends Component {
    render() {
        return (
            <Container fluid="md">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="client_name" placeholder="Client Name:" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="client_email" placeholder="Client Email:" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="job_title" placeholder="Job Title:" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="job_description" placeholder="Description:" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="client_email" placeholder="Client Email:" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}
