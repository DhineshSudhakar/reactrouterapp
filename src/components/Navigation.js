import React from 'react'

import { NavLink } from 'react-router-dom'

import './../App.css';

function Navigation() {
    return (
        <div className="navigation">
            <NavLink activeClassName="customNav" to="/home">Home</NavLink>{" "}
            <NavLink activeClassName="customNav" to="/about">About</NavLink>{" "}
            <NavLink activeClassName="customNav" to="/service">Service</NavLink>{" "}
            <NavLink activeClassName="customNav" to="/contact">Contact</NavLink>{" "}
            <NavLink activeClassName="customNav" to="/users">Users</NavLink>{" "}
        </div>
    )
}

export default Navigation
