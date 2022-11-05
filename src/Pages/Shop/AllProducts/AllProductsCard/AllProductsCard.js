import React from 'react';
import ProductModal from './../../../Home/HotDeals/Modal/ProductModal';
import { useNavigate } from 'react-router-dom';

const AllProductsCard = ({ product }) => {
    const { model, price, discount, newPrice, image } = product;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate=useNavigate()
    const handlePurchase=()=>{
            navigate('/purchase',{state:{purchasedProduct:product}})
    }

    return (
        <div className="col-md-3">
            <div className='productCard'>
                <img src={image} className='img-fluid' alt="" />
                <h6 className='mt-5 fw-bold'>{model}</h6>
                <div className='d-flex justify-content-between mt-3 '>
                    <p>${newPrice}</p>
                    <p className='discountPrice'>{discount}%</p>
                    <p>$<del>{price}</del></p>
                </div>
                <div className='d-flex justify-content-between mt-3'>
                    <button onClick={handlePurchase} className='productBtn'>Buy Now</button>
                    <button onClick={handleOpen} className='productBtn'>Details</button>
                </div>

            </div>
            <ProductModal open={open} handleClose={handleClose} product={product}></ProductModal>
        </div>
    );
};

export default AllProductsCard;