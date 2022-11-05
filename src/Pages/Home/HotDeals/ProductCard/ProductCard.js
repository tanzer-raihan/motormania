import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductModal from '../Modal/ProductModal';
import './ProductCard.css'

const ProductCard = ({ product }) => {
    const { model, price, discount, newPrice, image} = product;
    const [open, setOpen] = React.useState(false);
    const navigate=useNavigate();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handlePurchase=()=>{
            navigate('/purchase',{state:{purchasedProduct:product}})
    }

    return (
        <div className='col-md-4'>
            <div className='productCard'>
                <img src={image} className='img-fluid' alt="" />
                <h6 className='mt-5 fw-bold'>{model}</h6>
                <div className='d-flex justify-content-between mt-3 '>
                    <p>${newPrice}</p>
                    <p className='discountPrice'>{discount}%</p>
                    <p>$<del>{price}</del></p>
                </div>
                <div className='d-flex justify-content-between mt-3'>
                    <button className='productBtn' onClick={handlePurchase}>Buy Now</button>
                    <button onClick={handleOpen} className='productBtn'>Details</button>
                </div>

            </div>
            <ProductModal open={open} handleClose={handleClose} product={product}></ProductModal>


        </div>
    );
};

export default ProductCard;