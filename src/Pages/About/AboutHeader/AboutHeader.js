import React from 'react';
import './AboutHeader.css'

const AboutHeader = () => {
    return (
        <div className='aboutHeaderContainer'>
            <div className="row row-col-md-2 g-4 ">
                <div className="col-md-7 ">
                    <div className='aboutText p-5'>
                        <h1 className='fw-bold mb-3'>About Us</h1>
                        <h4>SHOP MOTORCYCLE GEAR FOR MOTORCYCLE ENTHUSIASTS</h4>
                        <p className='mt-4'>MotorMania was founded by a core team of riders who were frustrated with their options for buying on-line.

                            MotorMania's goal is bringing the best possible shopping experience to any enthusiast who visits us in-store or online looking for motorcycle jackets, apparel, helmets, motorcycle gear, accessories & almost everything else that goes on your person or your motorcycle. We also attempt to specialize where it makes sense for certain specific riding styles such as Sport Touring, Adventure & Sport Touring & Track Day / Racing.

                            MotorMania's goal is not just to carry all of the premium brand motorcycle jackets, leathers, protection & armor, motorcycle helmets, boots and gear that a rider of any style may need, but to provide the customer service and shopping experience that a person would expect from a truly customer-focused store.</p>
                    </div>
                </div>
                <div className="col-md-5 ">
                    <div className='aboutIconContainer d-flex align-items-center'>
                        
                        <div className='row row-col-md-2 g-4'>
                            <div className="col-md-6">
                                <div className='text-center'>
                                    <h1><i class="fa-solid fa-circle-check text-secondary"></i></h1>
                                    <h5>Successfully Sold</h5>
                                    <h5>3567</h5>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='text-center'>
                                    <h1><i class="fa-solid fa-face-smile text-secondary"></i></h1>
                                    <h5>Happy People</h5>
                                    <h5>2879</h5>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className='text-center'>
                                    <h1><i class="fa-solid fa-shop text-secondary"></i></h1>
                                    <h5>Total Outlet</h5>
                                    <h5>13</h5>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='text-center'>
                                    <h1><i class="fa-solid fa-award text-secondary"></i></h1>
                                    <h5>Best Selling Award</h5>
                                    <h5>08</h5>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AboutHeader;