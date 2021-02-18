import React from "react";
import {Link} from 'react-router-dom'

import Signup from '../signup/Signup'
import Login from '../login/Login'

const Navbar = () => {
    return (
        // <Router>
            <div>
                <nav className="header__navigator">
                    {/* <div className="header"> */}



                    <p className="header__logo"><Link to="/">
                    {" "}
                    CRYPTO COLLECTION. <br />
                    LINK

                    </Link></p>


                    <div className="registration__buttons">
                    <Login />
                    <Signup />
                    </div>
                </nav>

                <nav className="router__tabs">

                    <div className="my__collection__tab"><Link to="/collection">
                        <span className="tab__text"> My Collection</span>
                    </Link></div>

                    <div className="my__watchlist__tab"><Link to="/watchlist">
                        <span className="tab__text">My Watchlist</span>
                    </Link></div>

                    
                    <div className="shop__tab"><Link to="/shop">

                    <span className="tab__text">Get T-Shirt</span>
                    </Link></div>
                </nav>
            </div>
        /* </Router> */
  );
};

export default Navbar;
