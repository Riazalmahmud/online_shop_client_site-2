import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Category.css'
const Category = ({ category }) => {
    const { img } = category;
    return (
        <div>
            <Col>
                <Card className="category">
                    <Card.Img variant="top" src={img} width={'150px'} />
                </Card>
            </Col>
        </div>
    );
};

export default Category;