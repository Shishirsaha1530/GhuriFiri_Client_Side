import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './PackageCard.css'
const PackageCard = (props) => {
    const {name, description, duration, price, img, _id} = props.packageItem;
    return (
         <div>
        {/* showing single package  data on card  */}
             <div className="card shadow-lg  bg-body rounded" >
                <img src={img} className="card-img-top img-fluid" style={{height:"220px"}}  alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Package: {name} </h5>
                    <p className="card-text cardText">{description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Package Duration: {duration} Days </li>
                    <li className="list-group-item">Package Fee: {price} taka</li>
                </ul>
                <Link to={`/booking/${_id}`} className='my-3 mx-auto'>
                <Button variant="contained" color="success" endIcon={<SendIcon />}>Book Now </Button></Link>
                </div>
        </div>
    );
};

export default PackageCard;