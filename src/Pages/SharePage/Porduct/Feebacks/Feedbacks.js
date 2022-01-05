import React from "react";
import Rating from "@mui/material/Rating";
const Feedbacks = ({ testiMonialDetail }) => {
  const { name, address, description, img, rating } = testiMonialDetail;
  console.log("testiMonialDetail" + testiMonialDetail);
  return (
    <div class="item">
      <div class="shadow-effect">
        <img class="img-circle" src={img} />
        <Rating name="read-only" value={rating} readOnly />

        <p>{description}</p>
      </div>
      <div class="testimonial-name">
        <h5>{name}</h5>
        <small>{address}</small>
      </div>
    </div>
  );
};

export default Feedbacks;
