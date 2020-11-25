import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


import '../App.css'


const homeContainer = () => {
    return (
        <div>
        <Container className="vertical-center">
            <Row  >
                <Col>
                    <h1 className="banner-text">
                    QUICK AND EAZY
                    </h1>
                    <h1 className="banner-text">
                    PHOTO RELEASE
                    </h1>
                    <br />
                    <Button variant="light" as={Link} to='/new-release'>Send Release Now</Button>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default connect()(homeContainer)
