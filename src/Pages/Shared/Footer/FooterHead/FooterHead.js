import React from 'react';
import './FooterHead.css'

const FooterHead = () => {
    return (
        <div className='row row-col-md-3 g-4 footerHeadContainer'>
            <div className="col-md-4">
                <div className='d-flex align-items-center'>
                    <h1><i className="fa-solid fa-ship"></i></h1>
                    <div className='ms-3'>
                        <h5 className='fw-bold'>Free Shipping</h5>
                        <h6 className='fw-bold'>Free Shipping All over BD</h6>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className='d-flex align-items-center'>
                    <h1><i className="fa-solid fa-money-bill-transfer"></i></h1>
                    <div className='ms-3'>
                        <h5 className='fw-bold'>Installment Available</h5>
                        <h6 className='fw-bold'>Get upto 6 Months Installment</h6>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className='d-flex align-items-center'>
                    <h1><i className="fa-solid fa-gears"></i></h1>
                    <div className='ms-3'>
                        <h5 className='fw-bold'>Free Servicing</h5>
                        <h6 className='fw-bold'>One Year Servicing Warrenty</h6>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FooterHead;