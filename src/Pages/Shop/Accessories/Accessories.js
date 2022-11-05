import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleAccessoriesCard from './SingleAccessoriesCard/SingleAccessoriesCard';
import { CircularProgress } from '@mui/material';

const Accessories = () => {
    const [accessories, setAccessories] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/shop/accessories')
            .then(res => res.json())
            .then(data => setAccessories(data))
    }, []);
    return (
        <div className='px-3  mb-5'>
            <div className='text-center mb-5'>
                <h1 className='fw-bold'>Accessories</h1>

            </div>
            {accessories?.length > 0 ? <div className='row row-col-md-3 g-3'>
                {
                    accessories?.map(product => <SingleAccessoriesCard
                        key={product.name}
                        product={product}

                    ></SingleAccessoriesCard>)
                }

            </div>:<div className='text-center'><CircularProgress></CircularProgress></div>}
        </div>
    );
};

export default Accessories;