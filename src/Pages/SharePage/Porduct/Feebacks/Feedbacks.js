import React, { useEffect, useState } from 'react';

const Feedbacks = () => {

    const [testimonials, setTestimonials] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:5000/feedbacks")
            .then(res => res.json())
        .then(data=> console(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Feedbacks;