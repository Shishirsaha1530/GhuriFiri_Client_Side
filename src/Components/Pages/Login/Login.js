import React from 'react';
import './login.css'
import googleImg from '../../../image/25555-middle.png'
import useAuth from './../../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
const Login = () => {
    let {handleGoogleSignIn} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

        const handleGoogleLogin = () => {
        handleGoogleSignIn()
         .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className='container my-5 py-5'>
           <div className='row mx-auto d-flex justify-content-center'>
                <div className='col-md-6 d-flex border border-success p-3 shadow-lg bg-body rounded'>
                    <div>
                        <h3> Login Using Your Google Account </h3>
                    </div>
                    <div>
                        <img onClick={handleGoogleLogin} src={googleImg} alt="" className='googleImgStyle' />
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Login;