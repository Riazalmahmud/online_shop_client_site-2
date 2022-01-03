import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Category from '../Category/Category';
const Catagories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('./Catagories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <Row xs={1} md={5} className="g-4">
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </Row>
        </div>
    );
};

export default Catagories;