import React from "react";
import "./style.css";

export const Navigation = () => {
    return (
        <nav className="navbar">
            <a href="#about">About</a>
            <a href="#membership">Memberships</a>
            <div className="dropdown">
                <button className="dropbtn">Shop
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="#sbd">SBD</a>
                    <a href="#frictionlabs">FrictionLabs</a>
                    <a href="#110p">110Percent</a>
                </div>
            </div>
            <a href="#events">Events</a>
            <a href="#faq">FAQ</a>
        </nav>
    );
};

export default Navigation;
