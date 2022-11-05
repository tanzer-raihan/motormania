import React from 'react';
import Offer from '../../Home/Offer/Offer';
import Accessories from '../Accessories/Accessories';
import AllProducts from '../AllProducts/AllProducts';
import ShopBanner from '../ShopBanner/ShopBanner';
import Review from '../../Home/Review/Review';
import GetUpdate from '../../Home/GetUpdate/GetUpdate';
import HeaderMain from '../../Shared/Header/HeaderMain/HeaderMain';
import Footer from '../../Shared/Footer/Footer';
import useAuth from './../../../Hooks/Authentication/Auth/useAuth';
import Loading from '../../Loading/Loading';

const ShopMain = () => {
    const { isLoading } = useAuth()
    return (
        <div>
            {!isLoading ? <div>
                <HeaderMain></HeaderMain>
                <ShopBanner></ShopBanner>
                <Offer></Offer>
                <AllProducts></AllProducts>
                <Accessories></Accessories>
                <Review></Review>
                <GetUpdate></GetUpdate>
                <Footer></Footer>
            </div> : <Loading></Loading>}

        </div>
    );
};

export default ShopMain;