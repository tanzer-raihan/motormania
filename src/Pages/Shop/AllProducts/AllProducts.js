import React from 'react';
import './AllProducts.css'
import { useState } from 'react';
import { useEffect } from 'react';
import AllProductsCard from './AllProductsCard/AllProductsCard';
import { CircularProgress } from '@mui/material';

const AllProducts = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/shop/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='allProductsContainer py-5' id='productTop'>
            <div className="px-3">
                <div className='text-center mb-5'>
                    <h1 className='fw-bold'>Our Collection</h1>
                    <h6 className='fw-bold text-secondary'>Innovations Are Here</h6>
                </div>
                {products?.length > 0 ? <div className='row row-col-md-4 g-2'>
                    {
                        products?.map(product => <AllProductsCard
                            key={product.name}
                            product={product}

                        ></AllProductsCard>)
                    }

                </div>: <div className='text-center'><CircularProgress></CircularProgress></div>}
            </div>

        </div>
    );
};

export default AllProducts;