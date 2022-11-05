import * as React from 'react';
import './AddProduct.css'
import TextField from '@mui/material/TextField';

const AddProduct = () => {
    return (
        <div className='d-flex justify-content-center '>
            <div >
                <div className='makeAdminCard'>
                    <h4 className='text-center fw-bold'> Add New Products To  Shop </h4>
                    <form >
                        <div>
                            <TextField className='w-100 mt-3' id="standard-basic" label="Model Name" required variant="standard" type='text' />
                        </div>
                        <div>
                            <TextField className='w-100 mt-3' id="standard-basic" label="Price" required variant="standard" type='text' />
                        </div>
                        <div>
                            <TextField className='w-100 mt-3' id="standard-basic" label="newPrice" required variant="standard" type='text' />
                        </div>
                        <div>
                            <TextField className='w-100 mt-3' id="standard-basic" label="Discount" required variant="standard" type='text'  />
                        </div>
                        <div>
                            <TextField className='w-100 mt-3' id="standard-basic" label="Image Link" required variant="standard"  type="link"/>
                        </div>
                        <div className='mt-3 text-center'>
                            <button className='purchaseBtn'>Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;