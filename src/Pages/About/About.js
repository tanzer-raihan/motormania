import React from 'react';
import GetUpdate from '../Home/GetUpdate/GetUpdate';
import Footer from '../Shared/Footer/Footer';
import HeaderMain from '../Shared/Header/HeaderMain/HeaderMain';
import './About.css'
import AboutHeader from './AboutHeader/AboutHeader';
import OurTeam from './OurTeam/OurTeam';
import Partner from './Partner/Partner';
import useAuth from './../../Hooks/Authentication/Auth/useAuth';
import Loading from '../Loading/Loading';

const About = () => {
    const { isLoading } = useAuth();
    return (
        <div>
            {!isLoading ? <div><HeaderMain></HeaderMain>
                <AboutHeader></AboutHeader>
                <OurTeam></OurTeam>
                <Partner></Partner>
                <GetUpdate></GetUpdate>
                <Footer></Footer></div> : <Loading></Loading>}

        </div>
    );
};

export default About;