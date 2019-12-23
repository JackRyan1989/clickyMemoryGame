import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import './cardDisp.css';

function CardDisp(props) {
    return (
        <div className="mx-auto">
            <Card className='p-2 m-2 border-0 card' style={{ width: '18rem' }}>
                    <Image className="card-img-top" onClick={props.score} variant='top' src={props.image} id={props.id} />
            </Card>
        </div>
    )
}

export default CardDisp;
