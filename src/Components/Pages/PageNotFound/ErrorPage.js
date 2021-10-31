import React from 'react';
import {NavLink} from 'react-router-dom';
import notFoundImg from '../../../image/jepygq-x5.png'
const ErrorPage = () => {
    return (
        <div className='container'>
            <div className='row my-5 '>
                <div className='col-md-10 mx-auto'>
                    <img src={notFoundImg} alt="" className="img-fluid" style={{height:"500px"}} /> <br />
                    <NavLink to="/" className='btn btn-success mt-3'> Home Page </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;