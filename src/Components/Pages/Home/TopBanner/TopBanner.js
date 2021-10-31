import React from 'react';
import './TopBanner.css'
const TopBanner = () => {
    return (
    <div id='topBannerBg' className='d-flex flex-column justify-content-center align-items-center'> 
        <h3 className='text-center text-white font-monospace mb-2'>FIND THE PERFECT PLACE TO GO</h3>
        <p className='text-center fw-bold text-white'> “Traveling – it leaves you speechless, then turns you into a storyteller” – Ibn Battuta </p>
        <div className="input-group w-50 mb-3">
            <input type="text" className="form-control" placeholder="Search Your Holiday Destination" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <span className="input-group-text btn btn-danger" id="basic-addon2">Start Planning</span>
        </div>
    </div>
        
    );
};

export default TopBanner;