import { Form, Col, Button, InputGroup } from 'react-bootstrap'

export default function FormExample() {
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
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="text" placeholder="Client Email" name="client_email" />
              </InputGroup>
            </Form.Group>

          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik103">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text" placeholder="Job Title" name="job_title"/>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik104">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
              />
              <Form.Control.Feedback type="invalid" tooltip>
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik105">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" name="zip"/>
              <Form.Control.Feedback type="invalid" tooltip>
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Button type="submit">Submit form</Button>
        </Form>
      )}