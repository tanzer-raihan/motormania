import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navigation.css'
import useAuth from './../../../../Hooks/Authentication/Auth/useAuth';
const Navigation = () => {
    const navigate = useNavigate();
    const { user, logOut } = useAuth();
    const handleLogOut = () => {
        logOut();
    }
    const handleWatchList = () => {
            navigate('/dashboard')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">

                    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className='navLink' activeclassname='active' to='/home'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeclassname='active' className='navLink' to='/shop'>Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeclassname='active' className='navLink' to='/dashboard'>DashBoard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeclassname='active' className='navLink' to='/about'>About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink activeclassname='active' className='navLink' to='/contact'>Contact</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">

                            <div>
                                <button className="navbarBtn" onClick={handleWatchList}>Watchlist</button>
                            </div>
                            <div className='signInBtnSection'>
                                {!user?.email ? <button className="navbarBtn"><NavLink activeclassname='active' className='navLink' to='/signin'>Sign-In</NavLink></button> :
                                    <button onClick={handleLogOut} className="navbarBtn">Sign-Out</button>
                                }

                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;