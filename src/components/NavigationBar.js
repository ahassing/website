import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link to='/' className='item' >About</Link>
            <Link to='/projects' className='item' >Projects</Link>
            <Link to='/resume' className='item' >Resume</Link>
            <Link to='/contact' className='item '>Contact</Link>
        </div>
    )
};

export default NavigationBar;
