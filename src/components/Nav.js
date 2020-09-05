import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <header className="main-head">
            <nav>
                <Link className="logo" to="/">
                    <h1 >Nottingham</h1>
                </Link>
                <ul>
                    <Link to="/news">
                        <li>News</li>
                    </Link>
                    <Link to="/search">
                        <li>Search</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;