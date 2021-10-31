import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import './Header.css';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
  let {user, logOut} = useAuth()
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed navbar-light bg-light">
              <div className="container">
                <NavLink  className="navbar-brand companyName" to="/"> GhuriFiri.Com </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                {/* navabar menu items */}
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <NavLink  className="nav-link"  to="/home">
                      Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_Item" className="nav-link"
                       to="/about">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_Item"  className="nav-link" 
                      to="/package">Packages</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_Item"  className="nav-link" 
                      to="/testimonial">Testimonial</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_Item"  className="nav-link" 
                      to="/frequent">FAQ</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink  activeClassName="menu_Item" className="nav-link" to="/contact">
                      Contact
                      </NavLink>
                    </li>
                        <li className="nav-item">
                        {
                          user.displayName? user.displayName:""
                        }
                    </li>

                    <li>
                    {
                      user.displayName? <Link to='/managepackage' className='btn btn-warning'> Dashboard </Link>:""
                    }
                    </li>

                    <li>
                    {
                      user.displayName?<button  onClick={logOut} className='ms-0 ms-md-1 mt-2 mt-md-0 btn btn-danger' > log out </button>
                      
                       :<Link to='/login' className='mt-3 mt-md-0'> <button className='btn btn-success'>Login</button>  </Link>
                    }
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </div>
    );
};

export default Header;