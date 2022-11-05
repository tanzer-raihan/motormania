import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import './Review.css'
import ReviewCard from "./ReviewCard";



const Review = () => {
    const [reviews, setReviews] = useState();
    useEffect(() => {
        fetch('https://cryptic-dusk-45122.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1500,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };


    return (
        <div className="reviewConatainer">
            <h2 className="mb-5 fw-bold"> Happy Clients </h2>
            <Slider {...settings}>
                {
                    reviews?.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }
            </Slider>
        </div>
    );
};

export default Review;