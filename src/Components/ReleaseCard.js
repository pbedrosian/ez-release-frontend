import React from 'react';
import { Card } from 'react-bootstrap';

const ReleaseCard = (props) => {
    return (
        <div style={{paddingTop: '20px', alighSelf: 'center'}}>
            <Card bg='dark' style={{ width: '18rem', height: '16rem', top: '10px' }}>
                <Card.Body>
                    <Card.Title>{props.data.client_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.data.client_email}</Card.Subtitle>
                    <Card.Text>
                        {props.data.job_description}
                    </Card.Text>
                    <Card.Link href="#">View Form</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                <Card.Footer>
                     <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
    </div>
    );
};

export default ReleaseCard;

