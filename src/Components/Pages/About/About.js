import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'

const About = () => {
    return (
        <div className='mt-5'>
         <div className="main">
                 <h4 className="title">About Us</h4>
            </div>
             <div className='container mt-4'>
                <div className='row d-flex align-items-center'>
                  <div className='col-md-6'>
                        <img src="https://cdn.pling.com/img/7/1/9/3/d4b4c2871c5da5e26c296f3c336aabf20e0c.jpg" alt="" className='img-fluid'/>
                    </div>
                    <div className='col-md-6'>
                        <h3 className='fw-bold font-monospace'>Welcome to the GhuriFiri.Com </h3>
                        <p className='my-4 aboutText lh-base'>Discovery Bangladesh operate various regular, customize and special Bangladesh tour packages round the year. <br /> As a professional tour operator in Bangladesh, we regularly operate customized Bangladesh tour packages which include luxury Bangladesh tour packages, City Sightseeing and River Cruising tour packages, Archaeological Sites & Cultural Tour, Adventure & Wildlife tours and many more tour packages. Come and explore Bangladesh with us and Discover Bangladesh Naturally!
                         </p>
                        <Link to='/testimonial' className='mt-3 mt-md-0'> <button className='btn btn-success'>See Client Review</button>  </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;