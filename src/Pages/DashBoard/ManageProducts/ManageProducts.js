import React, { useEffect, useState } from 'react';
import Loading from '../../Loading/Loading';
import './ManageProducts.css'
import ManageProductsCard from './ManageProductsCard/ManageProductsCard';

const ManageProducts = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/shop/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return (
        <div>
            <h3 className='fw-bold text-center mb-4'>List Of All Products</h3>
            <div className='p-2'>
                {products?.length > 0 ? <div className='row row-col-md-2 g-4'>
                    {
                        products?.map(product => <ManageProductsCard
                            key={product._id}
                            product={product}
                        ></ManageProductsCard>)
                    }

                </div> : <Loading></Loading>}

            </div>
        </div>
    );
};

export default ManageProducts;