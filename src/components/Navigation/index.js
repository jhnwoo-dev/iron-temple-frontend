import React from "react";
import "./style.css";

export const Navigation = () => {
    return (
        <nav className="navbar">
            <a href="#about" className="a-padding">About</a>
            <a href="#membership" className="a-padding">Memberships</a>
            <div className="dropdown">
                <a href="shopall">
                    <button className="dropbtn ">Shop
                        {/* <i className="fa fa-caret-down"></i> */}
                    </button>
                </a>
                <div className="dropdown-content">
                    <a href="#sbd" >SBD</a>
                    <a href="#frictionlabs">FrictionLabs</a>
                    <a href="#110p">110Percent</a>
                </div>
            </div>
            <a href="#events" className="a-padding">Events</a>
            <a href="#faq" className="a-padding">FAQ</a>
        </nav>
    );
};

export default Navigation;
