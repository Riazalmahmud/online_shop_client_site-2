import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import ShopNow from '../ShopNow/ShopNow';
import './ShopNows.css'
const ShopNows = () => {
    const [shopProduct, setShopProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setShopProduct(data))
    }, [])
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

                <Row xs={1} md={5} className="g-4">
                    {
                        shopProduct.slice(11, 16).map(shopNow => <ShopNow
                            key={shopNow.id}
                            shopNow={shopNow}
                        ></ShopNow>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default ShopNows;