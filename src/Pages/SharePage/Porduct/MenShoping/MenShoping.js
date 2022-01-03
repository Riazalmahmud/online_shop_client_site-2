import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from '@mui/material/Rating';

const MenShoping = (props) => {
    const { handaleAdd } = props
    const { price, title, image, id,rating } = props.product;

    return (
        <div>
            <Col>
                <Card className="shopNow py-5 my-5">
                    <div className="card-design">
                        <Card.Img variant="top" src={image} />
                        <br />
                        <p className='pt-2'> {title} </p>
                        <p> price ${price}</p>
                        {/* <button type="button">quick view</button> */}
                   <Rating name="read-only" value={rating.rate} readOnly />
                        <button type="button" onClick={handaleAdd}> <i class="fas fa-shopping-cart" >Add to cart page</i></button>
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default MenShoping;