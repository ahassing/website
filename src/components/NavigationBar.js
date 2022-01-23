import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            <div className='ui divider'></div>
            <nav>
                <ul>
                    <li><Link to='/' >About</Link></li>
                    <li><Link to='/blog' >Blog</Link></li>
                    <li><Link to='/resume' >Resume</Link></li>
                    <li><Link to='/contact' >Contact</Link></li>
                </ul>
            </nav>
            <div className='ui divider'></div>
        </div>
    )
};

export default NavigationBar;
