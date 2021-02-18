import React from "react";
import {Router, Link, Route} from 'react-router-dom'

import Signup from '../signup/Signup'
import Login from '../login/Login'

const Navbar = () => {
    return (
        // <Router>
            <div>
                <nav className="header__navigator">
                    {/* <div className="header"> */}

                    {/* <Route path ="/"> */}

                    <p className="header__logo"> 

                    {" "}
                    CRYPTO COLLECTION. <br />
                    LINK

                    </p>

                    {/* </div> */}
                    <div className="registration__buttons">
                    <Login />
                    <Signup />
                    </div>
                </nav>
                <nav className="router__tabs">
                    <div className="my__collection__tab"><Link to="/collection"></Link>
                    <span className="tab__text"> My Collection</span>
                    </div>
                    <div className="my__watchlist__tab">
                    <span className="tab__text">My Watchlist</span>
                    </div>
                    <div className="shop__tab">
                    <span className="tab__text">Get T-Shirt</span>
                    </div>
                </nav>
            </div>
        /* </Router> */
  );
};

export default Navbar;
