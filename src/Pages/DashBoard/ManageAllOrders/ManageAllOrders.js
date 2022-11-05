import React, { useEffect, useState } from 'react';
import AllOrdersCard from './AllOrdersCard';
import Loading from './../../Loading/Loading';
import useAuth from './../../../Hooks/Authentication/Auth/useAuth';

const ManageAllOrders = () => {
    const{user}=useAuth();
    const [allOrders, setAllOrders] = useState();
    useEffect(() => {
        fetch('https://cryptic-dusk-45122.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [allOrders])
    return (
        <div>
            <h3 className='fw-bold text-center mb-4'>List Of All Orders</h3>
        {user?.email? <div className='p-2'>
            {allOrders?.length > 0 ? <div className='row row-col-md-2 g-4'>
                {
                    allOrders?.map(orderItem => <AllOrdersCard
                    key={orderItem._id}
                    orderItem={orderItem}
                    
                    ></AllOrdersCard>
                    )
                }

            </div> : <div><h4 className='fw-bold text-secondary text-center mt-5'>Currently Have No Order</h4></div>}

        </div>:<Loading></Loading>}
        </div>
    );
};

export default ManageAllOrders;