import React from 'react';

const ManageAccessoriesCard = ({ accessory }) => {
    const { image, model, price, newPrice, _id } = accessory;
    const handleDeleteProduct = () => {
        const proceed = window.confirm('Do You Want To Delete That Product?');
        if (proceed) {
            fetch('http://localhost:5000/shop/accessories', {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ deletedProductId: _id })

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully Deleted The Product')
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
                        <h6>Price: {price}</h6>
                        <h6 className=''>Discount Price: ${newPrice}</h6>

                        <button onClick={handleDeleteProduct} className='productBtn'>Delete Product</button>


                    </div>



                </div>


            </div>

        </div>
    );
};

export default ManageAccessoriesCard;