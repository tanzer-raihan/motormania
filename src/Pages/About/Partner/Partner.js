import React from 'react';
import Slider from 'react-slick';
import './Partner.css'
import p1 from '../../../Assets/p1.jpg'
import p2 from '../../../Assets/p2.jpg'
import p3 from '../../../Assets/p3.jpg'
import p4 from '../../../Assets/p4.jpg'
import p5 from '../../../Assets/p5.jpg'

const Partner = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
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
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div className='container py-5 '>
            <h2 className='fw-bold mb-5'> Our Relieable Partner </h2>
            <Slider {...settings}>
                <div>
                    <img src={p1} className='img-fluid' alt="" />
                </div>
                <div>
                    <img src={p2} className='img-fluid' alt="" />
                </div>
                <div>
                    <img src={p3} className='img-fluid' alt="" />
                </div>
                <div>
                    <img src={p4} className='img-fluid' alt="" />
                </div>
                <div>
                    <img src={p5} className='img-fluid' alt="" />
                </div>
                <div>
                    <img src={p1} className='img-fluid' alt="" />
                </div>
                <div>
                    <img src={p2} className='img-fluid' alt="" />
                </div>
                <div>
                    <img src={p3} className='img-fluid' alt="" />
                </div>
                

            </Slider>
        </div>
    );
};

export default Partner;