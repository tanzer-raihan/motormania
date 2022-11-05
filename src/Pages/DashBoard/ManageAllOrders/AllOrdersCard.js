import React from 'react';


const AllOrdersCard = ({ orderItem }) => {
    const { model, email, address, newPrice, contact, cardName, cardNumber, deliveryType, displayName, image, status, _id } = orderItem;

    const handleStatusChange = () => {

        fetch(`https://cryptic-dusk-45122.herokuapp.com/orders/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ productId: _id })
        })
            .then(res=>res.json())
            .then(data=>{})

    }
    const handleOrderDelete = () => {
        const proceed = window.confirm('Are You Sure To Delete?');
        if (proceed) {
            fetch(`https://cryptic-dusk-45122.herokuapp.com/orders/${email}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ cancelId: _id })
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.deletedCount > 0) {
                        alert('Successfully Deleted')
                    }
                })
        }
    }
    return (
        <div className='col-md-6'>
            <div className='cartProductCard'>
                <div className='row row-col-2 g-4 align-items-center'>
                    <div className="col-md-6 col-sm-6">
                        <img src={image} className='img-fluid w-75' alt="" />
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <h5 className='fw-bold'>{model}</h5>
                        <h6 className='fw-bold text-secondary'>${newPrice}</h6>
                        <h6 className='fw-bold text-success'>Status: {status}</h6>
                        <small className='d-block'> <span className='fw-bold'>Customer:</span> {displayName}</small>
                        <small className='d-block'><span className='fw-bold'>Contact:</span> {contact}</small>
                        <small className='d-block'><span className='fw-bold'>Email:</span> {email}</small>
                        <small className='d-block'><span className='fw-bold'>Address:</span> {address}</small>
                        <small className='d-block'><span className='fw-bold'>Delivery Type:</span> {deliveryType}</small>
                        <small className='d-block'><span className='fw-bold'>CardName:</span> {cardName}</small>
                        <small className='d-block'><span className='fw-bold'>Number:</span> {cardNumber}</small>


                        <div className='mt-2 d-flex justify-content-between'>
                            <button onClick={handleStatusChange} className='productBtn me'>Shipped</button>
                            <button onClick={handleOrderDelete} className='productBtn'>Delete</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllOrdersCard;