import React, { Component } from 'react'

import { Navbar, Form, FormControl, Button, InputGroup } from 'react-bootstrap';

export default class ReleaseNav extends Component {

    state = {
        name: '',
        month: '',
        year: ''
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
            name: '',
            month: '',
            year: ''
        })
    }

    render() {
        return (
            <div>
                <Navbar className="bg-light justify-content-between">
                    <Form inline onSubmit={(event) => this.onSubmit(event)}>
                        <FormControl type="text" name="name" placeholder="Client Last Name:" className=" mr-sm-3"
                        maxLength="15"onChange={(event) => this.handleOnChange(event)} />
                        <FormControl type="text" name="month" placeholder="Month:" className=" mr-sm-3"
                        maxLength="9"onChange={(event) => this.handleOnChange(event)} />
                        <FormControl type="text" name="year" placeholder="Year:" className=" mr-sm-3"
                        maxLength="4" onChange={(event) => this.handleOnChange(event)} />
                        <InputGroup.Text id="basic-addon1">Status</InputGroup.Text>
                        <Form.Control as="select" custom>
                            <option>All</option>
                            <option>Pending</option>
                            <option>Closed</option>
                        </Form.Control>
                        <Button type="submit" variant="dark">Submit</Button>
                    </Form>
                </Navbar>
                {this.state.name}
                <br />
                {this.state.month}
                <br />
                {this.state.year}                
            </div>
        )
    }
}
