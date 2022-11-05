import React from 'react';
import Creator from './Creator/Creator';
import './Footer.css'
import FooterHead from './FooterHead/FooterHead';
import FooterMiddle from './FooterMiddle/FooterMiddle';

const Footer = () => {
    return (
        <div className='footerContainer '>
            <div className='container'>
                <FooterHead></FooterHead>
                <FooterMiddle></FooterMiddle>
              
            </div>
            <Creator></Creator>

        </div>
    );
};

export default Footer;