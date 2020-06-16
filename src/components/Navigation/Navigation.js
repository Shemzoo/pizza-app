import React from 'react'
import { Link } from 'react-router-dom';
import './Navigation.css'

export default function Navigation() {
    const linkStyle = {
        color: 'white'
    };

    return (
        <nav className="nav">
            <ul className="nav_links">
                <Link style={linkStyle} to='/login'>
                    <li>Login</li>
                </Link>
                <Link style={linkStyle} to='/menu'>
                    <li>Menu</li>
                </Link>
                <Link style={linkStyle} to='/cart'>
                    <li>Cart</li>
                </Link>   
            </ul>
        </nav>
    )
}

