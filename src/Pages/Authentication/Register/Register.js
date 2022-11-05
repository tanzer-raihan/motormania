import * as React from 'react';
import TextField from '@mui/material/TextField';
import './Register.css';
import { Checkbox } from '@mui/material';

import { NavLink } from 'react-router-dom';
import useAuth from './../../../Hooks/Authentication/Auth/useAuth';
import { useState } from 'react';
import HeaderMain from '../../Shared/Header/HeaderMain/HeaderMain';
import Footer from '../../Shared/Footer/Footer';
const Register = () => {
    const { registerWithEmail, error } = useAuth();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const getName = (event) => {
        const name = event.target.value;
        setName(name)
    }
    const getEmail = (event) => {
        const email = event.target.value;
        setEmail(email)
    }
    const getPassword = (event) => {
        const password = event.target.value;
        setPassword(password);
    }

    const handleRegister = (event) => {
        event.preventDefault();
        console.log(name, email, password)
        registerWithEmail(name, email, password, event);


    }



    return (
        <div>
            <HeaderMain></HeaderMain>
            <div className='SignInContainer'>
                <div className="container d-flex justify-content-center">
                    <div className='signInForm '>
                        <h4 className='fw-bold text-center mb-3'>Register Your Account</h4>
                        <form onSubmit={handleRegister} >
                            <div>
                                <TextField id="standard-basic" label="Name" variant="standard" required className='authenticationInputField' onBlur={getName} />
                            </div>
                            <div className='mt-2'>
                                <TextField id="standard-basic" label="Email" variant="standard" required className='authenticationInputField' onBlur={getEmail} />
                            </div>
                            <div className='mt-2'>
                                <TextField id="standard-basic" label="Password" variant="standard" required className='authenticationInputField' onBlur={getPassword} />
                            </div>
                            <div className='mt-3'>
                                <Checkbox color="primary" required />
                                <small>Agree to MotorMania's <span className='text-primary'>Terms and Policies.</span></small>
                            </div>
                            {error && <div>
                                <small className='text-danger'>{error}</small>
                            </div>}
                            <div className='mt-3'>
                                <div>
                                    <button className='authenticationBtn' type='submit'>Register Now</button>
                                </div>

                            </div>

                        </form>
                        <div className='mt-3'>
                            <h6 className=''>Have MotorMania Account? <NavLink className='text-primary' to='/signin'>Sign-In Here</NavLink></h6>
                        </div>


                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;