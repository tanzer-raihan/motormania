import React from 'react';
import Contact from '../Contact';
import SendMessage from '../SendMessage/SendMessage';
import HeaderMain from './../../Shared/Header/HeaderMain/HeaderMain';
import Footer from '../../Shared/Footer/Footer';
import useAuth from './../../../Hooks/Authentication/Auth/useAuth';
import Loading from './../../Loading/Loading';

const ContactMain = () => {
    const { isLoading } = useAuth()
    return (
        <div>
            {!isLoading ? <div>
                <HeaderMain></HeaderMain>
                <Contact></Contact>
                <SendMessage></SendMessage>
                <Footer></Footer>
            </div> : <Loading></Loading>}
        </div>
    );
};

export default ContactMain;