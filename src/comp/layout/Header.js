import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={HStyle}>
            <h1>Todo List App</h1>
            <Link style={lStyle} to="/">Home</Link> | 
            <Link style={lStyle} to="/about">About</Link>
        </header>
    )
}

const HStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const lStyle = {
    color: '#eee',
    textDecoration:'none',
    padding: '2px 10px'
}

export default Header