import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth.js";
import MenShoping from "../MenShoping/MenShoping";
const MenShopings = () => {
  const { user } = useAuth();
  const [shopProduct, setShopProduct] = useState([]);
  const shopingInfo = { user: user.displayName, email: user.email };
  const [addCart, setAddCart] = useState(shopingInfo);
  console.log(addCart);
  console.log(addCart);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setShopProduct(data));
  }, []);

  const handaleAdd = (id) => {
    const uri = `http://localhost:5000/products/${id}`;
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setAddCart(data));

    const shopInfo = {
      ...addCart,
      displayName: user.displayName,
      email: user.email,
    };

    fetch("http://localhost:5000/shopManage", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(shopInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div className="Weekly-products pb-5 mb-5">
        <div className="shop-product">
          <div className="hr-tag"></div>
          <div className="shop-text">
            <h5>WEEKLY FEATURED PRODUCTS </h5>
          </div>
          <div className="hr-tag"></div>
        </div>
        {/* -----------------------  product ------------------------ */}
        <Row xs={1} md={5} className="g-5">
          {shopProduct.slice(0, 5).map((product) => (
            <MenShoping
              key={product.id}
              product={product}
              handaleAdd={handaleAdd}
            ></MenShoping>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default MenShopings;
