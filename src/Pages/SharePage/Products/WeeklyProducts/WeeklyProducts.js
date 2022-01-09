import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Weeklyproduct from "../Products/Weeklyproduct/Weeklyproduct";

import "./WeeklyProducts.css";
const WeeklyProducts = () => {
  const [weeklyproducts, setWeeklyProducts] = useState([]);

  useEffect(() => {
    fetch("https://obscure-fjord-46479.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setWeeklyProducts(data));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="Weekly-products pb-5 mb-5">
          <div className="weekly-product">
            <div className="hr-tag"></div>
            <div className="weekly-text">
              <h5>SHOP NOW</h5>
            </div>
            <div className="hr-tag"></div>
          </div>
          {/* -----------------------  product ------------------------ */}

          <Row xs={1} md={5} className="g-5">
            {weeklyproducts.slice(0, 5).map((weeklyProduct) => (
              <Weeklyproduct
                key={weeklyProduct.id}
                weeklyProduct={weeklyProduct}
              ></Weeklyproduct>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default WeeklyProducts;
