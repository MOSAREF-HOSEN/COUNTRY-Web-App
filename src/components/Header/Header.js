import './Header.css'
import React from 'react';

const Header = () => {
    return (
        <div className='color ms-2'>
            <h3 className='text-center text-white'>COUNTRY | meaning in the Cambridge English Dictionary</h3>
            <div className='nav  d-flex justify-content-center '>
            
            <a className='text-dark fw-bold' href="">Home</a>
            <a className='text-dark fw-bold' href="">Content</a>
            <a className='text-dark fw-bold' href="">about us</a>
        </div>
        </div>
    );
};

export default Header;