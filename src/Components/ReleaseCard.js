import React from 'react';
import { Card } from 'react-bootstrap';

const ReleaseCard = (props) => {
    return (
        <div>
            <Card bg='dark' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.data.client_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.data.client_email}</Card.Subtitle>
                    <Card.Text>
                        {props.data.job_description}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
    </div>
    );
};

export default ReleaseCard;

