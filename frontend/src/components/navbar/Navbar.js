import React from "react";
import {Link} from 'react-router-dom'

import Signup from '../signup/Signup'
import Login from '../login/Login'

const Navbar = () => {
    return (
        // <Router>
            <div>
                <nav className="header__navigator">

                    <p className="header__logo"> 
                    <Link className="link" to="/">
                    {" "}
                    CRYPTO COLLECTION. <br />
                    LINK
                    </Link>
                    </p>


                    <div className="registration__buttons">
                    <Login />
                    <Signup />
                    </div>

                </nav>

<div>

                <nav className="router__tabs">
                    <Link className="link" to="/collection">
                    <div className="my__collection__tab">
                        <span className="tab__text"> My Collection</span>
                    </div>
                    </Link>

                    <Link className="link" to="/watchlist">
                    <div className="my__watchlist__tab">
                        <span className="tab__text">My Watchlist</span>
                    </div>
                    </Link>

                    
                        <Link className="link" to="/shop">
                    <div className="shop__tab">
                        <span className="tab__text">Get T-Shirt</span>
                    </div>
                    </Link>
                </nav>
</div>
            </div>
        /* </Router> */
  );
};

export default Navbar;
