//Admin Login page

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import WebPageMain from './WebPageMain';

function Login() {
    const [name, setName] = useState('Admin');
    const [pass, setPass] = useState('123');


    return (
        <div className='container' style={{ backgroundColor: '#e2e2e2',width:'50%', marginTop: '100px' }}>
                <form >
                    <div style={{ paddingTop: '30px' }}>
                        <h1>Admin Login</h1>
                    </div>
                    <hr></hr>
                    <div className="mb-3">
                        <label className='form-lable' style={{ float: 'left' }}>User Name:</label>
                        <input type='text' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className='form-lable' style={{ float: 'left' }}>Password:</label>
                        <input type='password' className='form-control' value={pass} onChange={(e) => setPass(e.target.value)} />
                    </div>
                    <hr></hr>
                    <div style={{ padding: '20px' }}>
                        <Link to='/main' activeClassName='active' className='btn btn-info' >Submit</Link>
                    </div>
                    <hr></hr>
                </form>
        </div>
    )
}

export default Login
