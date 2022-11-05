import React from 'react';
import './GetUpdate.css'
const GetUpdate = () => {
    return (
        <div className='updateContainer '>
            <div className="container text-center">
                <div className="text-md-start">
                    <div>
                        <h1 className='fw-bold'>Get All Update</h1>
                        <h6 >Subscribe to our store for more information and update of new products. </h6>
                        <div className='mt-4 text-md-start  px-3'>
                            <input className='subscribeInput' type="email" placeholder='severus.snap@hogwart.edu' />
                            <button className='subscribeBtn'>Subscribe</button>
                        </div>

                    </div>


                </div>

            </div>

        </div>
    );
};

export default GetUpdate;