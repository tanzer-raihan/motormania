import React from 'react';
import Rating from 'react-rating';
import './PartsCard.css'
const PartsCard = ({ singleParts }) => {
    const { name, ratings, price, image, discount, newPrice } = singleParts;
   
    return (
        <div className='col-md-12'>
            <div className='d-flex align-items-center'>
                <div>
                    <img className='img-fluid' src={image} alt="" />
                </div>
                <div className='ms-4'>
                    <h6 className='fw-bold'>{name}</h6>
                    <p className='ratings mt-3'><Rating
                        emptySymbol="fa fa-star-o fa-2x"
                        fullSymbol="fa fa-star fa-2x"
                        initialRating={ratings}
                        readonly
                    /></p>
                    <div className='d-flex  mt-3 priceInfo'>
                        <p>${newPrice}</p>
                        <p className='discountPrice mx-1'>{discount}%</p>
                        <p>$<del>{price}</del></p>
                    </div>
                    <div>
                        <button className='productBtn'>Buy Now</button>
                        <button className='productBtn ms-3'>Details</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default PartsCard;