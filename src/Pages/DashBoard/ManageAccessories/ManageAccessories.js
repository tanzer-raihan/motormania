import React, { useEffect, useState } from 'react';
import ManageAccessoriesCard from './ManageAccessoriesCard';
import Loading from './../../Loading/Loading';


const ManageAccessories = () => {
    const [accessories, setAccessories] = useState();
    useEffect(() => {
        fetch('https://cryptic-dusk-45122.herokuapp.com/shop/accessories')
            .then(res => res.json())
            .then(data => {
                setAccessories(data)
            })
    }, [accessories])
    return (
        <div>
            <h3 className='fw-bold text-center mb-4'>List Of All Accessories</h3>
            <div className='p-2'>
                {accessories?.length > 0 ? <div className='row row-col-md-2 g-4'>
                    {
                        accessories?.map(accessory => <ManageAccessoriesCard
                            key={accessory._id}
                            accessory={accessory}

                        ></ManageAccessoriesCard>)
                    }

                </div> : <Loading></Loading>}

            </div>
        </div>
    );
};

export default ManageAccessories;