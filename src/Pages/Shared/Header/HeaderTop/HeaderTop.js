import React from 'react';
import './HeaderTop.css';
import logo from '../../../../Assets/logo.png'

const HeaderTop = () => {
    return (
        <div className='headerTopContainer text-center '>
            <div className="row row-col-md-3 g-3 align-items-center">
                <div className='col-md-3'>
                    <div className='brandName text-md-start'>
                        <img className='img-fluid' src={logo} alt="" />

                    </div>

                </div>
                <div className="col-md-7">
                    <div className='text-md-center'>
                        <input className='headerTopInput' type="text" placeholder='Search Keyword  Here..' />
                        <button className='exploreBtn'>Explore</button>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className='text-md-end'>
                        <h3 ><i className="fa-solid fa-cart-plus cart"></i></h3>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default HeaderTop;