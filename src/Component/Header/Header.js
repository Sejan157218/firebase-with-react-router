import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Header.css"

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/register">Register</Link>
            {user.email || <Link to="/login">login</Link>}
            <h1>{user.displayName}</h1>
            {user.email && <button onClick={logOut}>Log Out</button>}
        </div>
    );
}


export default Header;