import React from 'react';
import sliderImage from '../../../image/slider_image/slider_1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css'
const Slider = () => {
    return (
        <div>
            <div className="slider-image container-fluid">
                <img className="img-fluid" src={sliderImage} alt="" />
            </div>


        </div>
    );
};

export default Slider;