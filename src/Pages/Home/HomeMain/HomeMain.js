import React from 'react';
import Banner from '../Banner/Banner';
import Explore from '../Explore/Explore';
import GetUpdate from '../GetUpdate/GetUpdate';
import HotDeals from '../HotDeals/HotDeals';
import Offer from '../Offer/Offer';
import Parts from '../Parts/Parts';
import Review from '../Review/Review';
import HeaderMain from './../../Shared/Header/HeaderMain/HeaderMain';
import useAuth from './../../../Hooks/Authentication/Auth/useAuth';
import Loading from './../../Loading/Loading';
import Footer from './../../Shared/Footer/Footer';


const HomeMain = () => {
    const {isLoading } = useAuth();
    return (
        <div>
            {!isLoading ? <div>
                <HeaderMain></HeaderMain>
                <Banner></Banner>
                <Offer></Offer>
                <HotDeals></HotDeals>
                <Parts></Parts>
                <Explore></Explore>
                <Review></Review>
                <GetUpdate></GetUpdate>
                <Footer></Footer>
            </div> : <Loading></Loading>}
        </div>
    );
};

export default HomeMain;