import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css'
const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/" className="navbar-button" activeClassName="active">
                Main page
            </NavLink>
            <NavLink to="/chat" className="navbar-button" activeClassName="active">
                Chat
            </NavLink>
            <NavLink to="/login" className="navbar-button" activeClassName="active">
                Log in
            </NavLink>
            <NavLink to="/register" className="navbar-button" activeClassName="active">
                Registration
            </NavLink>
        </div>
    );
};
export default Navbar;
