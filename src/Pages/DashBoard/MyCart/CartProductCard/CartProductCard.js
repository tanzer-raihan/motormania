import React from 'react';
import './CartProductCard.css'
import useAuth from './../../../../Hooks/Authentication/Auth/useAuth';
import { useNavigate } from 'react-router-dom';
const CartProductCard = ({ cartProduct }) => {
    const { model, newPrice, image, _id } = cartProduct;
    const { user } = useAuth();
    const navigate=useNavigate();
    const handleRemove = (productId) => {
        const proceed = window.confirm(`Remove ${model} From The Cart?`);
        if (proceed) {
            fetch(`https://cryptic-dusk-45122.herokuapp.com/cart/${user?.email}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ productId })
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.deletedCount > 0) {
                        alert('Successfully Removed')
                    }
                })
        }

    }
    const handleOrder=()=>{
            navigate('/purchase',{state:{purchasedProduct:cartProduct}})
    }

    return (
        <div className='col-md-6'>
            <div className='cartProductCard '>
                <div className='row row-col-2 g-4 align-items-center'>
                    <div className="col-md-6 col-sm-6">
                        <img src={image} className='img-fluid w-75' alt="" />
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <h5 className='fw-bold'>{model}</h5>
                        <h6 className=''>${newPrice}</h6>
                        <div className='d-flex justify-content-between mt-3'>
                            <button onClick={handleOrder} className='productBtn'>Order</button>
                            <button onClick={() => handleRemove(_id)} className='productBtn'>Remove</button>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default CartProductCard;