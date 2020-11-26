import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ReleaseCard = (props) => {
    const status = () => {
        if (props.data.signed === true) {
            return 'status: SIGNED'
        } else {
            return 'status: PENDING'
        }
    }

    const cardFooter = () => {
        if (status() === 'status: PENDING') {
            return ( 
            <Card.Link onClick={(event)=> handleClick(event)} variant='link' id={props.data.id}>Mark as Signed</Card.Link> 
            )
        }
    }

    const handleClick = (event) => {
        debugger
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
                    {/* {cardFooter()} */}
                </Card.Body>
                <Card.Footer>
                     <small className="text-muted">Due Date: {props.data.dueDate} - {status()}</small>
                </Card.Footer>
            </Card>
    </div>
    );
};

export default ReleaseCard;

