import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function CardDisp(props) {
    return (
        <Card>
            <Container>
                <Col xs={6} md={3}>
                <Image src={props.src} key={props.key} id={props.id} />
                </Col>
            </Container>
        </Card>
    )
}



export default CardDisp;
