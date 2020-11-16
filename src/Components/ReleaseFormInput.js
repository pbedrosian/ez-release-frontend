import { Form, Col, Button, InputGroup } from 'react-bootstrap'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRelease } from '../Actions/releaseAction'

class ReleaseFormInput extends Component {

  state = {
    firstName: '',
    lastName: '',
    clientEmail: '',
    jobTitle: '',
    jobDescription: '',
    dueDate: '',
    additionalNotes: ''
  }

  handleOnChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

onSubmit = (event) => {
  event.preventDefault()
  // const releaseData = {
  //   "firstName": this.state.firstName,
  //   "lastName": this.state.lastName,
  //   "clientEmail": this.state.clientEmail,
  //   "jobTitle": this.state.jobTitle,
  //   "jobDescription": this.state.jobDescription,
  //   "dueDate": this.state.dueDate,
  //   "additionalNotes": this.state.additionalNotes
  // }
  console.log(this.state)
  this.props.addRelease(this.state)
  this.setState({
    firstName: '',
    lastName: '',
    clientEmail: '',
    jobTitle: '',
    jobDescription: '',
    dueDate: '',
    additionalNotes: ''
  })
  console.log('state set to 0')
}
  
  render() {
    return (
      <div>
        <Form onSubmit={(event) => this.onSubmit(event)} >
          <Form.Row>
            <Form.Group as={Col} md="3" controlId="validationFormik101">
              <Form.Label>First name</Form.Label>
              <Form.Control value={this.state.firstName} type="text" name="firstName" placeholder="First Name:" 
              onChange={(event) => this.handleOnChange(event)}/>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationFormik102">
              <Form.Label>Last name</Form.Label>
              <Form.Control value={this.state.lastName} type="text" name="lastName" placeholder="Last Name:" 
              onChange={(event) => this.handleOnChange(event)} />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormikUsername2">
              <Form.Label>Client Email</Form.Label>
              <InputGroup>
                <Form.Control value={this.state.clientEmail} type="text" placeholder="Client Email:" name="clientEmail" 
                onChange={(event) => this.handleOnChange(event)} />
              </InputGroup>
            </Form.Group>

          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik103">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text" placeholder="Job Title:" name="jobTitle" value={this.state.jobTitle}
                onChange={(event) => this.handleOnChange(event)}/>
            </Form.Group>

            <Form.Group as={Col} md="8" controlId="validationFormik104">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description:" name="jobDescription" value={this.state.jobDescription}
              onChange={(event) => this.handleOnChange(event)}/>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationFormik105">
              <Form.Label>Date Due</Form.Label>
              <Form.Control type="text" placeholder="09-20-2021" name="dueDate" value={this.state.dueDate}
              onChange={(event) => this.handleOnChange(event)}/>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormik105">
              <Form.Label>Additional Notes</Form.Label>
              <Form.Control type="text" placeholder="Additional Notes:" name="additionalNotes" value={this.state.additionalNotes}
              onChange={(event) => this.handleOnChange(event)}/>
            </Form.Group>
            
          </Form.Row>
          <Button type="submit">Submit form</Button>
        </Form>
      </div>
      )}
    }

    const mDTP = (dispatch) => ({
      addRelease: (obj) => dispatch(addRelease(obj))
    })

    export default connect(null, mDTP)(ReleaseFormInput)