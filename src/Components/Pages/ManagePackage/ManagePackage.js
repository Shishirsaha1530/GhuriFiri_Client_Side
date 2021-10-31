import React from 'react';
import useAuth from './../../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const ManagePackage = () => {
    const {user} = useAuth()
    return (
        <div className='my-5 pb-5 container'>
            <div className='bg-success p-4 border border-dark d-flex justify-content-center'>
                <h4 className='text-white'>Welcome to The Dashboard {user.displayName} </h4>
            </div>
            
            <div className='mt-4  d-flex justify-content-center'>
                <Link to="/myorders" className='btn btn-warning ms-2'> My Orders </Link>
                <Link to='/manageorders' className='btn btn-danger ms-2'> Manage All Order </Link>
                <Link to='/addpackage' className='btn btn-info ms-2'> Add a Package </Link>
            </div>
            
        </div>
    );
};

export default ManagePackage;