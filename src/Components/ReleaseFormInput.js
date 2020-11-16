import { Form, Col, Button, InputGroup } from 'react-bootstrap'
import React, { Component } from 'react'

export default class ReleaseFormInput extends Component {

  state = {
    firstName: '',
    lastName: '',
    clientEmail: '',
    jobTitle: '',
    jobDescription: '',
    dueDate: '',
    additionalNotes: ''
  }

  
  render() {
    return (
        <Form >
          <Form.Row>
            <Form.Group as={Col} md="3" controlId="validationFormik101">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" name="firstName" placeholder="First Name:"/>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationFormik102">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" name="lastName" placeholder="Last Name:" />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormikUsername2">
              <Form.Label>Client Email</Form.Label>
              <InputGroup>
                <Form.Control type="text" placeholder="Client Email:" name="client_email" />
              </InputGroup>
            </Form.Group>

          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik103">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text" placeholder="Job Title:" name="job_title"/>
            </Form.Group>

            <Form.Group as={Col} md="8" controlId="validationFormik104">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description:"/>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationFormik105">
              <Form.Label>Date Due</Form.Label>
              <Form.Control type="text" placeholder="09-20-2021" name="due_date"/>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormik105">
              <Form.Label>Additional Notes</Form.Label>
              <Form.Control type="text" placeholder="Additional Notes:" name="due_date"/>
            </Form.Group>
            
          </Form.Row>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    }