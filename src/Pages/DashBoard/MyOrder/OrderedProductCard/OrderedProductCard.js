import React from 'react';
import './OrderedProductCard.css'
import useAuth from './../../../../Hooks/Authentication/Auth/useAuth';
const OrderedProductCard = ({ orderedProduct }) => {
    const { user } = useAuth()
    const { model, newPrice, deliveryType, address, image, _id, status } = orderedProduct;

    const handleOrderCancel = () => {
        const proceed = window.confirm('Do You Want To Cancel This Order?');
        if (proceed) {
            fetch(`https://cryptic-dusk-45122.herokuapp.com/orders/${user?.email}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ cancelId: _id })

            })
                .then(res => res.json())
                .then(data => {
                    if (data?.deletedCount > 0) {
                        alert('Cancellation Successfull');
                    }
                })
        }

    }

    return (
        <div className='col-md-6'>
            <div className='cartProductCard'>
                <div className='row row-col-2 g-4 align-items-center'>
                    <div className="col-md-6  col-sm-6">
                        <img src={image} className='img-fluid w-75' alt="" />
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <h5 className='fw-bold'>{model}</h5>
                        <h6 className='text-secondary fw-bold'>Price: ${newPrice}</h6>
                        <h6 className='text-success fw-bold'>Status: {status}</h6>
                        <h6>Delivery Type: {deliveryType}</h6>
                        <h6>Address: {address}</h6>

                        {status !=='Shipped' && <button onClick={handleOrderCancel} className='productBtn'>Cancel Order</button>}


                    </div>



                </div>


            </div>

        </div>
    );
};

export default OrderedProductCard;