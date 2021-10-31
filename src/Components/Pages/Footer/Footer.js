import React from 'react';
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='mt-5 pt-5'>
        <footer className="footer-20192">
      <div className="site-section">
        <div className="container bg-dark text-white">
          <div className="cta d-block d-md-flex align-items-center px-5">
            <div>
              <h2 className="mb-0">Ready to Travel With Us?</h2>
              <h3 className="text-dark">Contact Us to Book Your Favorite Destination!</h3>
            </div>
            <div className="ms-auto">
              <Link to="/contact" className="btn btn-dark rounded-0 py-3 px-5">Contact us</Link>
            </div>
          </div>
        <div className="input-group mb-5 w-50 mx-auto">
            <input type="text" className="form-control" placeholder="Subscribe Us For Newsletter" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <span className="input-group-text btn btn-success" id="basic-addon2">Subscribe Us</span>
        </div>
          <div className="row ms-2">
            <div className="col-sm">
              <h3 className='text-white fw-bold'> Top Packages</h3>
              <ul className="list-unstyled links">
                <li><a href="/">Sajek</a></li>
                <li><a href="/">Rangamati</a></li>
                <li><a href="/">Tanguar Haor</a></li>
                <li><a href="/">Saint Martin</a></li>
              </ul>
            </div>
            <div className="col-sm">
              <h3 className='text-white fw-bold'>Company</h3>
              <ul className="list-unstyled links">
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/package"> Package</Link></li>
                <li><Link to="/testimonial">Testimonial</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
              </ul>
            </div>
            <div className="col-sm">
              <h3 className='text-white fw-bold'>Further Information</h3>
              <ul className="list-unstyled links">
                <li><a href="/">Terms &amp; Conditions</a></li>
                <li><a href="/">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3 className='text-white fw-bold'>Follow us</h3>
              <ul className="list-unstyled social">
                <li><a href="/"><span className="icon-facebook"> <FacebookIcon/> </span></a></li>
                <li><a href="/"><span className="icon-twitter"> <TwitterIcon/></span>  </a></li>
                <li><a href="/"><span className="icon-linkedin"> <InstagramIcon/> </span>  </a></li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;