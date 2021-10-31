import React from 'react';
import { Link } from 'react-router-dom';
import travelImg from '../../../../image/undraw_by_the_road_re_vvs7 (1).svg';
import './BottomBanner.css'
import Button from '@mui/material/Button';
const BottomBanner = () => {
    return (
        <div className='homePage mt-5'>
            <div className='container '>
                <div className='row d-flex align-items-center'>
                    <div className='col-md-6 border border-success p-4 shadow-lg'>
                        <h3 className='fw-bold font-monospace'>Travel Around The World </h3>
                        <p className='my-3 bannerText lh-base'>Traveling is important for humans. We are communal creatures that are all of the same species, yet our location determines societal actions based off cultured and governmental laws. We are so similar, yet our little worlds are so entirely different. Traveling to see places beyond our hometown is crucial to gain exposure to the world. Whether someone travels domestically or to a foreign country, it can be an experience that is reminisced for a lifetime.
                         </p>
                         
                        <Link to='/package' className='mt-3 mt-md-0'> <Button variant="contained" color="success">Explore Packages</Button>  </Link>
                    </div>
                    <div className='col-md-6 mt-md-0 mt-5'>
                        <img src={travelImg} alt="" className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomBanner;