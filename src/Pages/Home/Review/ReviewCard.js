import React from 'react';
import Rating from 'react-rating';
import './ReviesCard.css'

const ReviewCard = ({ review }) => {
    const { name, from, opinion, rating } = review;
    return (
        <div className='reviewCard'>
            <div>
                <div className='text-center mb-4' >
                    <h6 className='fw-bold'>{name}</h6>
                    <small className='d-block  text-secondary'>{from}</small>

                </div>
            </div>
            <div className='text-center'>
                <div className='reviewRating my-2'>
                    <Rating
                        readonly
                        initialRating={rating}
                        emptySymbol="fa fa-star-o fa-2x"
                        fullSymbol="fa fa-star fa-2x"
                    />
                </div>
                <small >{opinion}</small>
            </div>


        </div>
    );
};

export default ReviewCard;