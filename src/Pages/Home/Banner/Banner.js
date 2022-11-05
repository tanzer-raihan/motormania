import React from 'react';
import './Banner.css';
import bike from '../../../Assets/bannerBike.png'
const Banner = () => {
    return (
        <div className='bannerContainer'>
            <div className="container">
                <div className="row row-col-md-2 g-3 align-items-center">
                    <div className="col-md-6">
                        <div>
                            <p className='bestDeal'>Best Deal!</p>
                            <h1 className='discount'>15% - 20% Off</h1>
                            <h3 className='purchase'>Purchase your preferable bike from MotorMaia and enjoy discounts!</h3>
                            <button className='bannerBtn'>Buy Now</button>
                        </div>

                    </div>
                    <div className='col-md-6'>
                        <div>
                            <img src={bike} className='img-fluid' alt="" />
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Banner;