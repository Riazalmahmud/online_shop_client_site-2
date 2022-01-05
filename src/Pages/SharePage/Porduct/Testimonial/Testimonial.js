import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import userPic from "../../../../image/user-one.png";
import "./Testimonial.css";
import Feedbacks from "../Feebacks/Feedbacks.js";
import Rating from "@mui/material/Rating";
const rating = 5;
const Testimonial = () => {
  const [testiMonials, setTestiMonials] = useState([]);
  console.log(testiMonials);
  useEffect(() => {
    fetch("http://localhost:5000/feedbacks")
      .then((res) => res.json())
      .then((data) => setTestiMonials(data));
  }, []);
  // Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 3000,
    smartSpeed: 300,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <section id="testimonial" className="testimonials pt-70 pb-70">
      <div className="container mt-5">
        <h4 className="miniTitle text-center">TESTIMONIALS</h4>
        <div className="text-center ">
          <h3 className="sectionTitle">What Our Clients are Saying?</h3>
        </div>
        <p className="text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel
              id="customer-testimonoals"
              className="owl-carousel owl-theme"
              {...options}
            >
              {testiMonials.length === 0 ? (
                <div className="item">
                  <h5>Review Looding ....</h5>
                  <div class="shadow-effect">
                    <img className="img-circle" src={userPic} />

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                  <div className="testimonial-name">
                    <h5>Riaz al mahmud </h5>
                    <small>Bangladesh</small>
                    <Rating name="read-only" value={rating} readOnly />
                  </div>
                </div>
              ) : (
                testiMonials.map((testiMonialDetail) => {
                  console.log();
                  return (
                    <Feedbacks
                      testiMonialDetail={testiMonialDetail}
                      key={testiMonialDetail._key}
                    />
                  );
                })
              )}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
