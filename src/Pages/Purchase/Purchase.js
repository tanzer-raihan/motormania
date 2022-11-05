import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Footer from '../Shared/Footer/Footer';
import HeaderMain from '../Shared/Header/HeaderMain/HeaderMain';
import './Purchase.css';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from './../../Hooks/Authentication/Auth/useAuth';
import { useState } from 'react';
import Loading from '../Loading/Loading';
const Purchase = () => {
    const location = useLocation();
    const { user, isLoading } = useAuth();
    let purchasedProduct = location?.state?.purchasedProduct;
    let email = user?.email;
    let displayName = user?.displayName
    const { model, newPrice, _id, image, price, discount,description } = purchasedProduct;
    const navigate = useNavigate();


    //getting card Type and delivery type
    const [card, setCard] = React.useState('');
    const [delivery, setDelivery] = React.useState('');
    const [cardName, setCardName] = useState();
    const [deliveryType, setDeliveryType] = useState();
    const [cardNumber, setCardNumber] = useState();
    const [address, setAddress] = useState();
    const [contact, setContact] = useState();

    const handleCardNameChange = (event) => {
        setCard(event.target.value);
        setCardName(event.target.value);
    };
    const handleDeliveryTypeChange = (event) => {
        setDelivery(event.target.value);
        setDeliveryType(event.target.value);
    }
    //end of card and delivery type
    //handle cancel
    const handlePurchaseCancel = () => {
        alert('Purchase Procedure Has Been Canceled');
        navigate('/shop');
    }
    //getting form information

    const getCardNumber = (event) => {
        const cardNumber = event.target.value;
        setCardNumber(cardNumber);
    }
    const getAddress = (event) => {
        const address = event.target.value;
        setAddress(address)

    }
    const getContact = (event) => {
        const contact = event.target.value;
        setContact(contact)
    }
    const handlePurchase = (event) => {
        const status='pending'
        event.preventDefault();
        const info = { model, newPrice, cardName, cardNumber, deliveryType, address, contact, email, displayName, image,status }
        fetch(`https://cryptic-dusk-45122.herokuapp.com/orders/${user?.email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Purchased');
                    event.target.reset();
                }
            })
            .finally(() => {
                //deleting ordered product from the cart list
                fetch(`https://cryptic-dusk-45122.herokuapp.com/cart/${user?.email}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ productId: _id })
                })
                    .then(res => res.json())
                    .then(data => { })

            })

    }


    return (
        <div>
            {!isLoading ? <div>
                <HeaderMain></HeaderMain>
                <div className='purchaseContainer'>
                    <div className='row row-col-md-2 g-4 justify-content-center'>
                        <div className="col-md-5">
                            <div className='purchasedProductCard h-100'>
                                <h5 className='fw-bold text-center mb-4'>Product Details</h5>
                                <div className='text-center'>
                                    <img src={image} className='img-fluid w-50' alt="" />
                                </div>
                                <div className='mt-5'>
                                    <h5>Model: {model}</h5>
                                    <h6>Price: ${price}</h6>
                                    <h6>Discount: {discount}%</h6>
                                    <h6>New Price: ${newPrice}</h6>
                                    <h6>Description: </h6>
                                    <p><small>{description}</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">

                            <div className='purchaseForm h-100'>

                                <div>
                                    <h5 className='text-center fw-bold'>Purchase Form</h5>
                                    <form onSubmit={handlePurchase} >
                                        <p className='mt-4 d-flex'>
                                            <TextField id="standard-basic" value={model}  variant="standard" className='me-2' />
                                            <TextField id="standard-basic" value={`$${newPrice}`} variant="standard" />
                                        </p>
                                        <p ><TextField className='purchaseInput' id="standard-basic" variant="standard" value={user?.displayName}  />
                                        </p>
                                        <p><TextField className='purchaseInput' id="standard-basic" variant="standard" value={user?.email}  />
                                        </p>
                                        <p>

                                            <FormControl required variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                                <InputLabel id="demo-simple-select-standard-label" >Card Name</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-standard-label"
                                                    id="demo-simple-select-standard"
                                                    value={card}
                                                    onChange={handleCardNameChange}
                                                    label="Age"
                                                >
                                                    <MenuItem value={'Visa'}>Visa</MenuItem>
                                                    <MenuItem value={'Master Card'}>Master Card</MenuItem>
                                                    <MenuItem value={'American Express'}>American Express</MenuItem>
                                                </Select>
                                            </FormControl>

                                            <FormControl required variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                                <InputLabel id="demo-simple-select-standard-label"  >Delivery</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-standard-label"
                                                    id="demo-simple-select-standard"
                                                    value={delivery}
                                                    onChange={handleDeliveryTypeChange}
                                                    label="Age"
                                                >
                                                    <MenuItem value={'Regular'}>Regular</MenuItem>
                                                    <MenuItem value={'Express'}>Express</MenuItem>
                                                    <MenuItem value={'Super Express'}>Super Express</MenuItem>
                                                </Select>
                                            </FormControl>


                                        </p>
                                        <p>
                                            <TextField required onChange={getCardNumber} className='purchaseInput' id="standard-basic" label="Card No" variant="standard" />
                                        </p>
                                        <p><TextField required onChange={getAddress} className='purchaseInput' id="standard-basic" label=" Address" variant="standard" />
                                        </p>
                                        <p><TextField required onChange={getContact} className='purchaseInput' id="standard-basic" label="Contact " variant="standard" />
                                        </p>

                                        <div className='d-flex justify-content-evenly mt-5'>
                                            <button type='submit' className='purchaseBtn'>Purchase</button>
                                            <button onClick={handlePurchaseCancel} className='purchaseBtn'>Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <Footer></Footer>
            </div> : <Loading></Loading>}
        </div>
    );
};

export default Purchase;