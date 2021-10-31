import React from 'react';
import './Testimonial.css';
const Testimonial = () => {
    return (
        <div className='mt-5 mx-auto container'> 
         <div className="main">
                 <h4 className="title">Our Happy Clients</h4>
            </div>
            <p className='lead text-center'>Our top priority is client satisfaction, and here's a review from an eminent satisfied customer. It is such a pleasure to have a happy customer walk out of our doors.</p>
        <div className="d-flex align-items-center py-5 mh-100"> 
    <div className="container">
        <div id="mycarousel" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#mycarousel" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#mycarousel" data-bs-slide-to="1"></li>
                <li data-bs-target="#mycarousel" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row">
                        <div className="col-lg-6 "> <img src="https://media.self.com/photos/5bf3101f9bad4f734081d82c/master/pass/woman-traveling-with-backpack-map.jpg" className="d-block w-100" alt="..."/> </div>
                        <div className="col-lg-6 bg-dark text-white ">
                            <div className=" d-flex flex-column justify-content-center my-5 px-3">
                                <p className="review text-center">"This was my first tour in Bangladesh.GhuriFiri.com is so professional and client oriented travel agency. Hope to travel with them again."</p>
                                <div className="name d-flex align-items-center justify-content-center"> <span className="fas fa-minus pe-1"></span>
                                    <p className="m-0">Christian Katherine </p>
                                </div>
                                <p className="job text-center">Travller</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row">
                        <div className="col-lg-6 "> <img src="https://www.smallerearth.com/system/forest_page/images/files/000/000/294/cropped_medium/daniel-bernard-1120732-unsplashTINY.jpg?1555498383" className="d-block w-100" alt="..."/> </div>
                        <div className="col-lg-6 bg-dark text-white ">
                            <div className=" d-flex flex-column justify-content-center my-5 px-3">
                                <p className="review text-center">"I travelled Tangaur Haor with them. They provice luxurious service to their clients and they are amazing."</p>
                                <div className="name d-flex align-items-center justify-content-center"> <span className="fas fa-minus pe-1"></span>
                                    <p className="m-0"> Maria Haque</p>
                                </div>
                                <p className="job text-center"> Manager, Bank Asia </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row">
                        <div className="col-lg-6 "> <img src="https://images.pexels.com/photos/8052808/pexels-photo-8052808.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="d-block w-100" alt="..."/> </div>
                        <div className="col-lg-6 bg-dark text-white">
                            <div className=" d-flex flex-column justify-content-center my-5 px-3">
                                <p className="review text-center">"Incredible services and amazing guide support. They are the best travel agency in Bangladesh. Highly Recommended to all"</p>
                                <div className="name d-flex align-items-center justify-content-center"> <span className="fas fa-minus pe-1"></span>
                                    <p className="m-0">Joy Smith</p>
                                </div>
                                <p className="job text-center">Project Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

    );
};

export default Testimonial;