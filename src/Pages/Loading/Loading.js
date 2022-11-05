import * as React from 'react';
import { CircularProgress } from '@mui/material';
import './Loading.css'


const Loading = () => {
    return (
        <div className='loadingContainer'>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='loadingSign text-center'>
                    <CircularProgress />
                    <h3 className='fw-bold mt-2'>Loading...</h3>
                </div>

            </div>
        </div>
    );
};

export default Loading;