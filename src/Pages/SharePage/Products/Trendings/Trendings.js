import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Trending from "../Trending/Trending";
import "./Trendings.css";
const Trendings = () => {
  const [trandings, settrandings] = useState([]);
  useEffect(() => {
    fetch("https://obscure-fjord-46479.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => settrandings(data));
  }, []);
  return (
    <div>
      <div className="container">
        <div className="Weekly-products py-3 my-3">
          <div className="weekly-product">
            <div className="hr-tag"></div>
            <div className="weekly-text">
              <h5>Trending Outfits</h5>
            </div>
            <div className="hr-tag"></div>
          </div>
          <p className="w-50 align-center tranding-text">
            Intelligentsia migas next level 90s woke ramps. Glossier vape celiac
            tumeric keffiyeh..
          </p>
          {/* -----------------------  product ------------------------ */}

          <Row xs={1} md={5} className="g-5">
            {trandings.slice(0, 5).map((trending) => (
              <Trending key={trending._id} trending={trending}></Trending>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Trendings;
