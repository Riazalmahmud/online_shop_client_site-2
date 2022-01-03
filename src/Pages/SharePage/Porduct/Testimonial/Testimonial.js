import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import testimonialImage from '../../../../image/testimonial/testimonial.png'
import testimonialImage01 from '../../../../image/testimonial/riaz.jpg';
import './Testimonial.css'
const Testimonial = () => {
 const [testimonials, setTestimonials] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:5000/feedbacks")
            .then(res => res.json())
        .then(data=> console(data))
    },[])
    return (
        <div>
            <div className="testimonial-section">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={testimonialImage}
                            alt="First slide"
                        />
                        <Carousel.Caption className="author-name">

                            <img src={testimonialImage01} alt="" />
                            <h3>Mr : Riaz Hosse </h3>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={testimonialImage}
                            alt="slider slide"
                        />
                        <Carousel.Caption className="author-name">
                            <img src={testimonialImage01} alt="" />

                            <h3>Mr : Riaz Hossen</h3>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={testimonialImage}
                            alt="First slide"
                        />
                        <Carousel.Caption className="author-name">
                            <img src={testimonialImage01} alt="" />
                            <h3>Mr : Riaz Hossen </h3>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Testimonial;