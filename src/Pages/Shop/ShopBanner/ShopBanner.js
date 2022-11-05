import React from 'react';
import './ShopBanner.css'
import banner from '../../../Assets/shopBanner.jpg'
const ShopBanner = () => {
    return (
        <div className='shopBannerContainer' >

            <img src={banner} className='img-fluid shopBannerImg' alt="" />

            <div className='bannerText text-center'>
                <h1>MotorMania</h1>
                <h6>Renowned For Up-to-dated All Hot Collection</h6>
                <button className='shopBannerBtn mt-2' > <a href="#productTop" id='explorebtn'> Explore More</a> </button>
            </div>

        </div>
    );
};

export default ShopBanner;