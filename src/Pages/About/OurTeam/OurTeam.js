import React from 'react';
import './OurTeam.css'
import manager from '../../../Assets/m1.jpg';
import representative from '../../../Assets/m2.jpg';
import mofficer from '../../../Assets/m3.jpg';

const OurTeam = () => {
    return (
        <div className='ourTeamContainer'>
            <h1 className='fw-bold'>Our Team</h1>
            <div className='row row-col-md-3 g-0 mt-5'>
                <div className="col-md-4">
                    <div className='memberCard'>
                        <img src={manager} className='img-fluid memberImg' alt="" />
                        <div className='memberInfo text-center'>
                            <h4>Liza Reinhart</h4>
                       
                            <div className='d-flex mt-2'>
                                <h1 className='ms-2 mediaIcon facebook'><i className="fa-brands fa-square-facebook"></i></h1>
                                <h1 className='ms-2 mediaIcon whatsApp'><i className="fa-brands fa-square-whatsapp"></i></h1>
                                <h1 className='ms-2 mediaIcon twitter'><i className="fa-brands fa-square-twitter"></i></h1>
                                <h1 className='ms-2 mediaIcon google'><i className="fa-brands fa-square-google-plus"></i></h1>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="col-md-4">
                    <div className='memberCard'>
                        <img src={representative} className='img-fluid  memberImg' alt="" />
                        <div className='memberInfo text-center'>
                            <h4>Eric Grover</h4>
                       
                            <div className='d-flex mt-2'>
                                <h1 className='ms-2 mediaIcon facebook'><i className="fa-brands fa-square-facebook"></i></h1>
                                <h1 className='ms-2 mediaIcon whatsApp'><i className="fa-brands fa-square-whatsapp"></i></h1>
                                <h1 className='ms-2 mediaIcon twitter'><i className="fa-brands fa-square-twitter"></i></h1>
                                <h1 className='ms-2 mediaIcon google'><i className="fa-brands fa-square-google-plus"></i></h1>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className='memberCard'>
                        <img src={mofficer} className='img-fluid  memberImg' alt="" />
                        <div className='memberInfo text-center'>
                            <h4>Hunnah Burg</h4>
                       
                            <div className='d-flex mt-2'>
                                <h1 className='ms-2 mediaIcon facebook'><i className="fa-brands fa-square-facebook"></i></h1>
                                <h1 className='ms-2 mediaIcon whatsApp'><i className="fa-brands fa-square-whatsapp"></i></h1>
                                <h1 className='ms-2 mediaIcon twitter'><i className="fa-brands fa-square-twitter"></i></h1>
                                <h1 className='ms-2 mediaIcon google'><i className="fa-brands fa-square-google-plus"></i></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default OurTeam;