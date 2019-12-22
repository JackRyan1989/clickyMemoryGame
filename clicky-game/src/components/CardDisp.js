import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function CardDisp(props) {
    return (
        <Card style={{ width: '3rem' }}>
            <Col lg={3}>
                <Image onClick={props.score} variant='top' src={props.image} id={props.id} clicked={props.clicked.toString()} thumbnail fluid />
            </Col>
        </Card>
    )
}



export default CardDisp;
