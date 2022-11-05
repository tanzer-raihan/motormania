import React from 'react';
import Footer from '../Shared/Footer/Footer';
import HeaderMain from '../Shared/Header/HeaderMain/HeaderMain';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='notFoundContainer'>
            <HeaderMain></HeaderMain>
            <div className='notFoundText'>
                <h1>404</h1>
                <h1>Page Not Available!</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;