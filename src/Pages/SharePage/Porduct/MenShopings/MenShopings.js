import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import MenShoping from '../MenShoping/MenShoping';
const MenShopings = () => {
    const [shopProduct, setShopProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setShopProduct(data))
    }, [])

    const handaleAdd = () => {


    }

    return (
        <div>
            <div className="Weekly-products pb-5 mb-5">
                <div className="shop-product">
                    <div className="hr-tag"></div>
                    <div className="shop-text">
                        <h5>WEEKLY FEATURED PRODUCTS</h5>
                    </div>
                    <div className="hr-tag"></div>
                </div>
                {/* -----------------------  product ------------------------ */}
                <Row xs={1} md={5} className="g-5">
                    {
                        shopProduct.slice(0, 5).map(product => <MenShoping
                            key={product.id}
                            product={product}
                            handaleAdd={handaleAdd}
                        ></MenShoping>)
                    }
                </Row>

            </div>
        </div>
    );
};

export default MenShopings;