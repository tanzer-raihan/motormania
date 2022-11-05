import React, { useState } from 'react';
import './MyCart.css'
import { useEffect } from 'react';
import useAuth from './../../../Hooks/Authentication/Auth/useAuth';
import CartProductCard from './CartProductCard/CartProductCard';
import { CircularProgress } from '@mui/material';

const MyCart = () => {
    const [cartProducts, setCartProducts] = useState();
    const { user } = useAuth();
    const [isProductLoading, setIsproductLoading] = useState(true);

    useEffect(() => {

        fetch(`https://cryptic-dusk-45122.herokuapp.com/cart/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCartProducts(data);
                setIsproductLoading(false);
            })
    }, [cartProducts,user?.email])
    return (
        <div className='myCartContainer'>
            <h3 className='fw-bold '>Items In Your Cart:</h3>
            {!isProductLoading ? <div>
                {cartProducts?.length > 0 ? <div className="row row-col-md-2 g-4 mt-3">

                    {
                        cartProducts?.map(cartProduct => <CartProductCard
                            key={cartProduct.model}
                            cartProduct={cartProduct}


                        ></CartProductCard>)
                    }

                </div> : <div className='text-center py-5'><h5 className='fw-bold text-secondary'>Your Cart Is Empty!</h5></div>
                }
            </div> : <div className='text-center'><CircularProgress></CircularProgress></div>}
        </div>
    );
};

export default MyCart;