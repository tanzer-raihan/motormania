import * as React from 'react';
import TextField from '@mui/material/TextField';
import './MakeAdmin.css';
import useAuth from './../../../Hooks/Authentication/Auth/useAuth';

const MakeAdmin = () => {
    const{idToken}=useAuth();
    const [adminMail, setAdminMail] = React.useState();
    const getEmail = (event) => {
        const email = event.target.value;
        setAdminMail(email);
    }
    const handleMakeAdmin = (event) => {
        event.preventDefault();

        fetch('https://cryptic-dusk-45122.herokuapp.com/users/makeadmin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization':`bearer ${idToken}`
            },
            body: JSON.stringify({ adminMail })

        })
            .then(res=>res.json())
            .then(data=>{
                if(data.modifiedCount>0){
                    alert('Successfully Added As An Admin')
                    event.target.reset();
                }
                else{
                    alert('Failed To Add As Admin')
                }
            })

    }
    return (
        <div className='d-flex justify-content-center '>
            <div >
                <div className='makeAdminCard'>
                    <h4 className='text-center fw-bold'>Add Email To Make Admin</h4>
                    <form onSubmit={handleMakeAdmin}>
                        <TextField className='w-100 mt-3' id="standard-basic" label="Email" required variant="standard" onBlur={getEmail} />
                        <div className='mt-3 text-center'>
                            <button type='submit' className='purchaseBtn'>Make Admin</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;