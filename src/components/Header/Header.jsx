import React from 'react';
import './Header.css'
import logo from '../../../images/Logo.svg'

const Header = () => {
    return (
        <header>
            <nav className='flex'>
                <figure>
                    <img src={logo} alt="" />
                </figure>
                <ul>
                    <li><a href="/home">home</a></li>
                    <li><a href="/service">service</a></li>
                    <li><a href="/cart">cart</a></li>
                    <li><a href="/login">login</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;