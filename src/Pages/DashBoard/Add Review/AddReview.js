import * as React from 'react';
import TextField from '@mui/material/TextField';
import './AddReview.css'
import useAuth from './../../../Hooks/Authentication/Auth/useAuth';
import Rating from 'react-rating';

const AddReview = () => {
    const { user } = useAuth();
    const [opinion, setOpinion] = React.useState('');
    const [from, setFrom] = React.useState('');
    let [rating, setRating] = React.useState();


    const getAddress = (event) => {
        setFrom(event.target.value);
    }
    const handleRatingChange = (value) => {
        setRating(value);

    }

    const handleReviewChange = (event) => {
        setOpinion(event.target.value);
    };
    const handleReview = (event) => {
        event.preventDefault();
        let name = user?.displayName;
        const review = { name, from, opinion, rating };


        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ review })


        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.insertedId) {
                    alert('Review Submitted');
                    event.target.reset();
                    setOpinion('')
                }
            })

    }

    return (
        <div>
            <div className='d-flex justify-content-center '>
                <div >
                    <div className='makeAdminCard'>
                        <h4 className='text-center fw-bold'> Add Your Review and Ratings </h4>
                        <form onSubmit={handleReview} >
                            <div>
                                <TextField className='w-100 mt-3' id="standard-basic" value={user?.displayName} required variant="standard" type='text' />
                            </div>
                            <div>
                                <TextField className='w-100 mt-3' id="standard-basic" label="Address" required variant="standard" type='text' onBlur={getAddress} />
                            </div>
                            <div>
                                <TextField
                                    required
                                    className='w-100 mt-3'
                                    id="standard-multiline-flexible"
                                    label="Review"
                                    multiline
                                    maxRows={5}
                                    value={opinion}
                                    onChange={handleReviewChange}
                                    variant="standard"
                                />
                            </div>
                            <div className='my-4 rating'>
                                <Rating

                                    initialRating={rating}
                                    emptySymbol="fa fa-star-o fa-2x"
                                    fullSymbol="fa fa-star fa-2x"
                                    fractions={2}
                                    onClick={handleRatingChange}


                                />
                            </div>

                            <div className='mt-3 text-center'>
                                <button type='submit' className='purchaseBtn'>Send Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;