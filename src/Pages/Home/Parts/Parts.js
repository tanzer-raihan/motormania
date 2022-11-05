import React, { useState, useEffect } from 'react';
import './Parts.css'
import img1 from '../../../Assets/b1.jpg'
import img2 from '../../../Assets/b2.jpg'
import PartsCard from './PartsCard/PartsCard';
import { useNavigate } from 'react-router-dom';

const Parts = () => {
    const navigate=useNavigate();
    const [parts, setParts] = useState();
    useEffect(() => {
        fetch('./parts.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    const handleSeeMore=()=>{
        navigate('/shop')
    }
    return (
        <div className='partsContainer py-3'>

            <div className="container">
               <div className='d-flex justify-content-between align-items-center'>
               <h1 className='fw-bold text-md-start mb-5'>Accessories</h1>
               <button onClick={handleSeeMore} className='seeMoreBtn'>See More</button>
               </div>
                <div className="row row-col-md-2 g-4" >
                    <div className="col-md-7 text-center">
                        <div className='row row-col-md-2 g-4'>
                            <div className="col-md-6">
                                <div className='partsImg'>
                                    <img src={img2} className='img-fluid pImg' alt="" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='partsImg'>
                                    <img src={img1} className='img-fluid pImg' alt="" />
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="col-md-5">
                        <div className="row row-col-md-1 g-2">
                            {
                                parts?.map(singleParts => <PartsCard
                                    key={singleParts.name}
                                    singleParts={singleParts}
                                ></PartsCard>)
                            }


                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Parts;