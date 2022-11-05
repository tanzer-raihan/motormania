import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contactContainer '>
            <div className="row row-col-md-2 g-4">
                <div className="col-md-6">
                    <div>
                        <h3 className='fw-bold'>Get In Touch</h3>
                        <p>Contact us using any of these media listed below. Call directly for any emergency or you can leave a message. Follow us on social media in order to get more from us.</p>
                        <div className='d-flex mt-4'>
                            <h1 className='ms-2 mediaIcon facebook'><i className="fa-brands fa-square-facebook"></i></h1>
                            <h1 className='ms-2 mediaIcon whatsApp'><i className="fa-brands fa-square-whatsapp"></i></h1>
                            <h1 className='ms-2 mediaIcon twitter'><i className="fa-brands fa-square-twitter"></i></h1>
                            <h1 className='ms-2 mediaIcon google'><i className="fa-brands fa-square-google-plus"></i></h1>
                        </div>

                        <div>
                            <h3 className='fw-bold mt-4'>Address</h3>
                            <div className='d-flex align-items-center mt-4 text-secondary'>
                                <p><i class="fa-solid fa-location-dot"></i></p>
                                <p className='ms-3'>Kotchandpur, Jhenaidah</p>


                            </div>
                            <div className='d-flex align-items-center mt-4 text-secondary'>
                                <p><i class="fa-solid fa-phone fs-large"></i></p>
                                <p className='ms-3'>+8801707553114</p>


                            </div>
                            <div className='d-flex align-items-center mt-4 text-secondary'>
                                <p><i class="fa-solid fa-envelope"></i></p>
                                <p className='ms-3'>tanzerraihan@gmail.com</p>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">

                </div>

            </div>

        </div>
    );
};

export default Contact;