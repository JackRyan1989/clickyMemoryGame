import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './cardDisp.css';

function CardDisp(props) {
    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Col>
                    <Image className="card-img-top" onClick={props.score} variant='top' src={props.image} id={props.id} thumbnail />
                </Col>
            </Card>
        </Container>
    )
}



export default CardDisp;
