import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from '@mui/material/Rating';

import './ShopNow.css'
const ShopNow = ({ shopNow }) => {
    const { price, title, image,rating } = shopNow;
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
                        <button type="button"> <i className="fas fa-shopping-cart"> Add to card</i></button>

                    </div>


                </Card>
            </Col>
        </div>
    );
};

export default ShopNow;