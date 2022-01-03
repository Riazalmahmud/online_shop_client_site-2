import React from 'react';
import Slider from '../SharePage/Slider/Slider'
import 'bootstrap/dist/css/bootstrap.min.css';
import Catagories from '../SharePage/Catagories/Catagories';
import Products from '../SharePage/Products/Products/Products';
import Testimonials from '../SharePage/Porduct/Testimonial/Testimonial';
import Trendings from '../SharePage/Products/Trendings/Trendings';
import Subcribtion from '../SharePage/Products/Subcribtion/Subcribtion';
const Home = () => {
    return (
        <div>
            <div className="slider-section pb-5">
                <Slider></Slider>
            </div>
            <div className="container pb-5">
                <Catagories></Catagories>
            </div>
            <div className="container">
                <Products></Products>
            </div>
            <Testimonials></Testimonials>

            <div className="container">
                <Trendings></Trendings>
            </div>

            <Subcribtion></Subcribtion>

        </div>

    );
};

export default Home;