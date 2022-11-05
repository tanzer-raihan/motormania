import * as React from 'react';
import TextField from '@mui/material/TextField';
import './SignIn.css'
import { Checkbox } from '@mui/material';

import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from './../../../Hooks/Authentication/Auth/useAuth';
import { useState } from 'react';
import HeaderMain from '../../Shared/Header/HeaderMain/HeaderMain';
import Footer from '../../Shared/Footer/Footer';
import Loading from '../../Loading/Loading'
import { useEffect } from 'react';
const SignIn = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState();
    const { googleSignIn, emailSignIn, user, isLoading, error } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    let redirectUrl = location?.state?.from || '/';

    const getEmail = (event) => {
        const email = event.target.value;
        setEmail(email);
    }
    const getPassword = (event) => {
        const password = event.target.value;
        setPassword(password)
    }
    const handleemailSignIn = (event) => {
        event.preventDefault();
        emailSignIn(email, password, event, redirectUrl);

    }
    const handleGoogleSignIn = () => {
        googleSignIn(redirectUrl);
    }
    useEffect(() => {
        if (user?.email) {
            navigate(redirectUrl, { replace: true });
        }
    }, [navigate, user?.email,redirectUrl]);


    return (
        <div>
            {!isLoading ? <div>
                <HeaderMain></HeaderMain>
                <div className='SignInContainer'>
                    <div className="container d-flex justify-content-center">
                        <div className='signInForm '>
                            <h4 className='fw-bold text-center mb-3'>Sign-In Your Account</h4>
                            <form onSubmit={handleemailSignIn}>
                                <div>
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
                                        <button className='authenticationBtn' type='submit'>Sign-In</button>
                                    </div>

                                </div>


                            </form>
                            <div className='mt-3'>
                                <button onClick={handleGoogleSignIn} className='authenticationBtn'>Sign-In With Google</button>
                            </div>
                            <div className='mt-3'>
                                <h6 >New to MotorMaina? <NavLink className='text-primary' to='/register'>Register Here</NavLink></h6>
                            </div>


                        </div>
                    </div>

                </div>
                <Footer></Footer>
            </div> : <Loading></Loading>}
        </div>

    );
};

export default SignIn;