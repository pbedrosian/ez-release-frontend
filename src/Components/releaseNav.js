import React, { Component } from 'react'

import { Navbar, Form, FormControl, Button, InputGroup } from 'react-bootstrap';

export default class ReleaseNav extends Component {

    render() {
        return (
            <div>
                <Navbar className="bg-light justify-content-between">
                    <Form inline onSubmit={(event) => this.onSubmit(event)}>
                        <FormControl type="text" name="name" placeholder="First Name:" className=" mr-sm-3"
                        maxLength="15"onChange={(event) => this.props.changeState(event)} value={this.props.state.name} />
                        <FormControl type="text" name="email" placeholder="Email:" className=" mr-sm-3"
                        onChange={(event) => this.props.changeState(event)} value={this.props.state.email} />
                        {/* <FormControl type="text" name="year" placeholder="Year:" className=" mr-sm-3"
                        maxLength="4" onChange={(event) => this.props.changeState(event)} value={this.props.state.year} /> */}
                        <InputGroup.Prepend>
                        </InputGroup.Prepend>
                        <Form.Control as="select" name='status' onChange={(event) => this.props.changeState(event)} custom>
                            <option>All</option>
                            <option>Pending</option>
                            <option>Signed</option>
                        </Form.Control>
                    </Form>
                </Navbar> 
                <br />  
            </div>
        )
    }
}
