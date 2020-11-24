import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ReleaseCard = (props) => {
    const status = () => {
        debugger
        if (props.data.signed === true) {
            return 'status: SIGNED'
        } else {
            return 'status: PENDING'
        }
    }
    return (
        <div style={{paddingTop: '20px', alighSelf: 'center'}}>
            <Card bg='dark' style={{ width: '21rem', height: '17rem', top: '10px' }}>
                <Card.Body>
                    <Card.Title>Client:</Card.Title>
                    <Card.Subtitle>{props.data.clientFirstName} {props.data.clientLastName}</Card.Subtitle>
                    <br />
                    <Card.Subtitle className="mb-2 text-muted">{props.data.clientEmail}</Card.Subtitle>
                    <br />
                    <Card.Title>Job:</Card.Title>
                    <Card.Subtitle className="mb-2">{props.data.jobTitle}</Card.Subtitle>
                    <Card.Link as={Link} to={`/release-forms/${props.data.id}`}>View Form</Card.Link>
                    <Card.Link >Another Link</Card.Link>
                </Card.Body>
                <Card.Footer>
                     <small className="text-muted">Due Date: {props.data.dueDate} - {status()}</small>
                </Card.Footer>
            </Card>
    </div>
    );
};

export default ReleaseCard;

