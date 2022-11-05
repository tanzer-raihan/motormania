import React from 'react';
import './SendMessage.css'

const SendMessage = () => {
    return (
        <div className='sendMessageContainer'>
            <div className="container">
                <h2 className='fw-bold text-center mb-5'>SEND MESSAGE</h2>
                <form className='text-center'>
                    <div >
                        <div className="row row-col-md-2 g-3">

                            <div className="col-md-6">
                                <input type="text" className='messageInput' placeholder='Your Name' required />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className='messageInput' placeholder='Contact' required />
                            </div>
                            <div className="col-md-6">
                                <input type="email" className='messageInput' placeholder='Your Email' required />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className='messageInput' placeholder='Subject' required />

                            </div>
                        </div>
                    </div>
                    <textarea  className='messageInput mt-3' rows="8" placeholder='Message...'></textarea>
                    <button className='sendMessageBtn mt-3 '>Send Message</button>

                </form>

            </div>
        </div>
    );
};

export default SendMessage;