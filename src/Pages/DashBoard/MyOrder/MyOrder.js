import React, { useEffect, useState } from 'react';
import './MyOrder.css'
import useAuth from './../../../Hooks/Authentication/Auth/useAuth';
import OrderedProductCard from './OrderedProductCard/OrderedProductCard';
import { CircularProgress } from '@mui/material';

const MyOrder = () => {
    const [orderedProducts, setOrderedProducts] = useState();
    const { user } = useAuth();
    const [isProductLoading, setIsProductLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrderedProducts(data)
                setIsProductLoading(false)
            })

    }, [orderedProducts,user?.email])
    return (
        <div className='myCartContainer'>
            <h3 className='fw-bold '>Ordered Items:</h3>
            {!isProductLoading ? <div>
                {orderedProducts?.length > 0 ? <div className="row row-col-md-2 g-4 mt-3">

                    {
                        orderedProducts?.map(orderedProduct => <OrderedProductCard
                            key={orderedProduct._id}
                            orderedProduct={orderedProduct}
                        ></OrderedProductCard>)
                    }

                </div> : <div className='text-center py-5'><h5 className='fw-bold text-secondary'>Your Order list Is Empty!</h5></div>
                }
            </div> : <div className='text-center'><CircularProgress></CircularProgress></div>}
        </div>
    );
};

export default MyOrder;