import React from "react";
import './navbar.scss';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">SHASHI🤪</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link-text nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link-text nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link-text nav-link" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link-text nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link-text nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

