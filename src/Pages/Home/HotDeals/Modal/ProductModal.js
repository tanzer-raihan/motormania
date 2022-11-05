import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './ProductModal.css'
import useAuth from './../../../../Hooks/Authentication/Auth/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,


};

const ProductModal = ({ open, handleClose, product }) => {
    const { model, price, discount, newPrice, image,description } = product;
    const { user } = useAuth();
    const email = user?.email;
    const client=user?.displayName;
    const cartedProduct = {client, email, model, newPrice, image }
    const handleAddToCart = () => {
        fetch(`https://cryptic-dusk-45122.herokuapp.com/cart/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartedProduct)
        })
            .then(res => res.json())
            .then(data => {
             if(data?.upsertedId){
                alert('Successfully Added To Cart')
             }
             else{
              alert('Already In Your Cart')
             }
            })
    }
    return (
        <div className='productModal'>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='text-center'>
                        <img src={image} className='img-fluid w-50' alt="" />
                        <h6 className='mt-5 fw-bold'>{model}</h6>
                        <p><small>{description}</small></p>
                        <div className='d-flex justify-content-between mt-4 '>
                            <p>${newPrice}</p>
                            <p className='discountPrice'>{discount}%</p>
                            <p>$<del>{price}</del></p>
                        </div>
                        <div className=' mt-3 d-flex justify-content-around'>
                            <button onClick={handleAddToCart} className='productBtn'>Add-To-Cart</button>
                            <button onClick={handleClose} className='productBtn'>Okay</button>

                        </div>

                    </div>

                </Box>
            </Modal>
        </div>
    );
};

export default ProductModal;