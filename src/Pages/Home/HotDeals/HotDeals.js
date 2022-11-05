import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './HotDeals.css'
import ProductCard from './ProductCard/ProductCard';
import img from '../../../Assets/4.jpg'

const HotDeals = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/hotdeals')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleExploreMore = () => {
        navigate('/shop')
    }
    return (
        <div className='hotDealsContainer py-5'>
            <div className='container text-center'>
                <div className='row row-col-md-2'>
                    <div className='col-md-6'>
                        <div className='text-md-start hd'>
                            <h2 className='fw-bold'>Hot Deals</h2>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='text-md-end'>
                            <NavLink to='/bikes' acitveclassname='active' className='productsLink' >Bikes</NavLink>
                            <NavLink to='/parts' acitveclassname='active' className='productsLink' >Parts</NavLink>
                            <NavLink to='/wheels' acitveclassname='active' className='productsLink' >Wheels</NavLink>
                            <NavLink to='/helmet' acitveclassname='active' className='productsLink' >Helmet</NavLink>
                            <NavLink to='/light' acitveclassname='active' className='productsLink' >Light</NavLink>
                            <NavLink to='/tire' acitveclassname='active' className='productsLink' >Tire</NavLink>
                        </div>
                    </div>

                </div>

                <div className='row row-col-md-2 g-4 py-5'>
                    <div className="col-md-9">
                        <div className="row row-col-md-3 g-1">
                            {
                                products?.map(product => <ProductCard
                                    key={product.model}
                                    product={product}

                                ></ProductCard>)
                            }
                        </div>

                    </div>
                    <div className="col-md-3 text-center">
                        <div className='goFirst'>
                            <img className=' img-fluid goFirstImg' src={img} alt="" />


                        </div>
                        <button onClick={handleExploreMore} className='exploreMoreBtn mt-4'>Explore More</button>
                        <button className='exploreMoreBtn mt-2'>Newsletter</button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default HotDeals;