import React from 'react';
import './Offer.css'
import offer1 from '../../../Assets/1.jpg'
import offer2 from '../../../Assets/2.jpg'
import offer3 from '../../../Assets/3.jpg'

const Offer = () => {
    return (
        <div className='offerContainer py-5'>
            <div className="row row-col-md-3 g-5">
                <div className="col-md-4">
                    <div className='offerImgContainer'>   
                        <img src={offer1} className='img-fluid offerImg' alt="" />
                    </div>

                </div>
                <div className="col-md-4">
                        <div className='offerImgContainer'>
                            <img src={offer2} className='img-fluid offerImg' alt="" />
                        </div>
                </div>
                <div className="col-md-4">
                    <div className='offerImgContainer'>
                        <img src={offer3} className='img-fluid offerImg' alt="" />
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Offer;