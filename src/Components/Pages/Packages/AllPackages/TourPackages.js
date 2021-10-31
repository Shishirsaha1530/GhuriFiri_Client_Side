import React, { useState, useEffect } from 'react';
import PackageCard from '../SinglePackages/PackageCard';


const TourPackages = () => {
     let [packages, setPackage] = useState([])
    // loading data
     useEffect(()=>{
        fetch('http://localhost:5000/packages')
        .then(res=> res.json())
        .then(data=>setPackage(data))
    },[])
    return (
        <div className='mt-4 pb-3 container'>
            <div className="main">
                 <h4 className="title">Our Top Packages </h4>
                 <p className='lead'>Our Top Trending Tour Pacakges. Choose Your Best Tour Package From Us </p>
            </div>
            <div className='row mt-3 gy-4'>
                    {
                        packages.map((item)=>{
                            return(
                                                
                                <div className='col-md-4' key={item._id}>
                                    <PackageCard packageItem={item}> </PackageCard>
                                </div>           
                                )
                                })
                    }
            </div>
        </div>
    );
};

export default TourPackages;