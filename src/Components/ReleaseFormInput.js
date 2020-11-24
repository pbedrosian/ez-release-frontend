import { Form, Col, Button, InputGroup } from 'react-bootstrap'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRelease } from '../Actions/releaseAction'
import ReleaseModal from './ReleaseModal'

import emailjs from 'emailjs-com';



class TestForm extends Component {

  state = {
    clientFirstName: '',
    clientLastName: '',
    clientEmail: '',
    jobTitle: '',
    jobDescription: '',
    dueDate: '',
    additionalNotes: '',
    errors: {
      clientFirstName: 'First name must exist!',
      clientLastName: 'Last name must exist!',
      clientEmail: 'Email is not valid!',
      jobTitle: 'Job title must exist!',
      dueDate: 'Due date must exist!'
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    const validEmailRegex = 
    // eslint-disable-next-line
    RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  
    switch (name) {
      case 'clientFirstName': 
        errors.clientFirstName = 
          value === ''
            ? 'First name must exist!'
            : '';
        break;
      case 'clientLastName': 
        errors.clientLastName = 
          value === ''
            ? 'Last name must exist!'
            : '';
        break;
      case 'clientEmail': 
        errors.clientEmail = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'jobTitle': 
        errors.jobTitle = 
          value === ''
            ? 'Job title must exist!'
            : '';
        break;
      case 'dueDate': 
        errors.dueDate = 
          value === ''
            ? 'Due date title must exist!'
            : '';
        break;
      default:
        break;
    }
  
    this.setState({errors, [name]: value}, ()=> {
        console.log(errors)
    })
  }

validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

sendEmail(e) {
  emailjs.sendForm('gmail', 'template_0xd4gck', e.target, 'user_YVjPtheLRs4bRVcnZXymU')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}

handleSubmit = (event) => {
  event.preventDefault();
  if(this.validateForm(this.state.errors)) {
    this.props.addRelease(this.state, this.props.history)
    this.sendEmail()
    this.setState({
      clientFirstName: '',
      clientLastName: '',
      clientEmail: '',
      jobTitle: '',
      jobDescription: '',
      dueDate: '',
      additionalNotes: ''
    })
  }else{
    console.error('Invalid Form')
  }
}
  
  render() {
    const {errors} = this.state;
    const errorSyle = {
      color: 'red',
      fontSize: "12px",
    }
    return (
      <div>
        <Form onSubmit={(event) => this.handleSubmit(event)} >
          <Form.Row>
            <Form.Group as={Col} md="3" controlId="validationFormik101">
              <Form.Label>First name</Form.Label>
              <Form.Control value={this.state.clientFirstName} type="text" name="clientFirstName" placeholder="First Name:" 
              onChange={(event) => this.handleChange(event)}/>
              {errors.clientFirstName.length > 0 && <span className='error' style={errorSyle}>{errors.clientFirstName}</span>}
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationFormik102">
              <Form.Label>Last name</Form.Label>
              <Form.Control value={this.state.clientLastName} type="text" name="clientLastName" placeholder="Last Name:" 
              onChange={(event) => this.handleChange(event)} />
              {errors.clientLastName.length > 0 && <span className='error' style={errorSyle}>{errors.clientLastName}</span>}

            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormikUsername2">
              <Form.Label>Client Email</Form.Label>
              <InputGroup>
                <Form.Control value={this.state.clientEmail} type="text" placeholder="Client Email:" name="clientEmail" 
                onChange={(event) => this.handleChange(event)} />
              </InputGroup>
              {errors.clientEmail.length > 0 && <span className='error' style={errorSyle}>{errors.clientEmail}</span>}
            </Form.Group>

          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik103">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text" placeholder="Job Title:" name="jobTitle" value={this.state.jobTitle}
                onChange={(event) => this.handleChange(event)} maxLength="25"/>
              {errors.jobTitle.length > 0 && <span className='error' style={errorSyle}>{errors.jobTitle}</span>}
            </Form.Group>

            <Form.Group as={Col} md="8" controlId="validationFormik104">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description:" name="jobDescription" value={this.state.jobDescription}
              onChange={(event) => this.handleChange(event)}/>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationFormik105">
              <Form.Label>Date Due</Form.Label>
              <Form.Control type="date" placeholder="dueDate" name="dueDate" value={this.state.dueDate}
              onChange={(event) => this.handleChange(event)}/>
              {errors.dueDate.length > 0 && <span className='error' style={errorSyle}>{errors.dueDate}</span>}            
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormik105">
              <Form.Label>Additional Notes</Form.Label>
              <Form.Control type="text" placeholder="Additional Notes:" name="additionalNotes" value={this.state.additionalNotes}
              onChange={(event) => this.handleChange(event)}/>
            </Form.Group>
            
          </Form.Row>
          <Button type="submit">Submit Release Form</Button>
        </Form>
        <br />
        <ReleaseModal formData={this.state} />
      </div>
      )}
    }

    const mDTP = (dispatch) => ({
      addRelease: (obj, history) => dispatch(addRelease(obj, history))
    })

    export default connect(null, mDTP)(TestForm)