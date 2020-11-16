import React from 'react';
import { Card } from 'react-bootstrap';

const ReleaseCard = (props) => {
    return (
        <div style={{paddingTop: '20px', alighSelf: 'center'}}>
            <Card bg='dark' style={{ width: '21rem', height: '17rem', top: '10px' }}>
                <Card.Body>
                    <Card.Title>{props.data.clientFirstName} {props.data.clientLastName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.data.clientEmail}</Card.Subtitle>
                    <Card.Text>
                        {props.data.jobDescription}
                    </Card.Text>
                    <Card.Link href="#">View Form</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                <Card.Footer>
                     <small className="text-muted">Due Date: {props.data.dueDate} - status: pending</small>
                </Card.Footer>
            </Card>
    </div>
    );
};

export default ReleaseCard;

