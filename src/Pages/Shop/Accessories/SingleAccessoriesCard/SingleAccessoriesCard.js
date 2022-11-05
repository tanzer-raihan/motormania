import React from 'react';
import Rating from 'react-rating';
import './SingleAccessoriesCard.css'
import ProductModal from './../../../Home/HotDeals/Modal/ProductModal';
import { useNavigate } from 'react-router-dom';

const SingleAccessoriesCard = ({ product }) => {
    const { model, ratings, discount, newPrice, price, image } = product;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate=useNavigate();
    const handlePurchase=()=>{
      
        navigate('/purchase',{state:{purchasedProduct:product}});

    }
    return (
        <div className='col-md-4 '>
            <div className='d-flex align-items-center accessoryCard '>
                <div>
                    <img className='img-fluid accessoryImg' src={image} alt="" />
                </div>
                <div className='ms-4'>
                    <h6 className='fw-bold'>{model}</h6>
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
                    <div className='d-flex'>
                        <button onClick={handlePurchase} className='productBtn'>Buy Now</button>
                        <button onClick={handleOpen} className='productBtn ms-3'>Details</button>
                    </div>

                </div>
            </div>
            <ProductModal open={open} handleClose={handleClose} product={product}></ProductModal>

        </div>
    );
};

export default SingleAccessoriesCard;