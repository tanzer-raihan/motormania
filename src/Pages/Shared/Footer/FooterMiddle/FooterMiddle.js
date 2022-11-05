import React from 'react';
import './FooterMiddle.css'
import { Link } from 'react-router-dom';

const FooterMiddle = () => {
    return (
        <div className='footerMiddleContainer'>
            <div className='row row-col-md-4 g-4'>
                <div className="col-md-4">
                    <div>
                        <p>Contact Us on any media listed below. Visit our showroom to see our full collection.</p>
                        <h6>Address: Kotchandpur, Jhenaidah</h6>
                        <h6>Phone: +8801707553114</h6>
                    </div>
                    <div className='d-flex mt-4'>
                        <h1 className='ms-2 mediaIcon facebook'><i className="fa-brands fa-square-facebook"></i></h1>
                        <h1 className='ms-2 mediaIcon whatsApp'><i className="fa-brands fa-square-whatsapp"></i></h1>
                        <h1 className='ms-2 mediaIcon twitter'><i className="fa-brands fa-square-twitter"></i></h1>
                        <h1 className='ms-2 mediaIcon google'><i className="fa-brands fa-square-google-plus"></i></h1>
                    </div>

                </div>
                <div className="col-md-3">
                    <div>
                        <h4 className='fw-bold'><span className='LinkHeader pb-2'>Service</span></h4>
                        <div className='mt-4'>
                            <h6><Link className='footerLink' to='/shipping'>Free Shipping</Link></h6>
                            <h6><Link to='/onlinepurchase' className='footerLink'>Online Purchase</Link></h6>
                            <h6><Link to='/delivery' className='footerLink'>Product Delivery</Link></h6>
                            <h6><Link to='/installment' className='footerLink'>Installment</Link></h6>
                        </div>
                    </div>

                </div>
                <div className="col-md-3">
                    <div>
                        <h4 className='fw-bold'><span className='LinkHeader pb-2'>Support</span></h4>
                        <div className='mt-4'>
                            <h6><Link to='/register' className='footerLink'>Register</Link></h6>
                            <h6><Link to='/subscribe' className='footerLink'>Subscribe</Link></h6>
                            <h6><Link to='/statement' className='footerLink'>Statement</Link></h6>
                            <h6><Link to='/askus' className='footerLink'>Question</Link></h6>
                        </div>
                    </div>

                </div>
                <div className="col-md-2">
                    <div>
                        <h4 className='fw-bold'><span className='LinkHeader pb-2'>Account</span></h4>
                        <div className='mt-4'>
                            <h6><Link to='/myaccount' className='footerLink'>My Account</Link></h6>
                            <h6><Link to='/carts' className='footerLink'>My Carts</Link></h6>
                            <h6><Link to='/orderlist' className='footerLink'>Order List</Link></h6>
                            <h6><Link to='/purchasehistory' className='footerLink'>Purchase History</Link></h6>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FooterMiddle;