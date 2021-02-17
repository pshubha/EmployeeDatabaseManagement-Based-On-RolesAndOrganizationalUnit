//Main Content

import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route, Redirect, NavLink } from 'react-router-dom'


function WebPageMain() {
    return (
        <>
            <div className='container' style={{ backgroundColor: '#e2e2e2', width: '70%', marginTop: '80px' }}>
                <div style={{ padding: '10px', float: 'right' }}>
                    <NavLink to='/' className='btn btn-outline-dark'>Log Out</NavLink>
                </div>
                <hr></hr>
                <div style={{ fontFamily: ('Papyrus', 'Fantasy'), marginRight: '500px' }}>
                    <h1>Welcome Admin....</h1>
                </div>
                <div className='container-fluid' className='shadow-lg p-3 mb-5 bg-white rounded' style={{ fontSize: '30px',color:'black' }} >
                    <Link to='/employee' >
                        <h3 style={{color: '#3399ff'}}>Employee</h3>
                    </Link>
                </div>
                <div className='container-fluid' className='shadow-lg p-3 mb-5 bg-white rounded hover-overlay' style={{ fontSize: '30px' }}>
                    <Link to='/roles'>
                    <h3 style={{color: '#00ff99'}}>Roles</h3>
                    </Link>
                </div>
                <div className='container-fluid' className='shadow-lg p-3 mb-5 bg-white rounded' style={{ fontSize: '30px' }}>
                    <Link to='/organization'>
                        <h3 style={{color:'#cc6699'}}>Organization</h3>
                    </Link>
                </div>
                <hr></hr>

            </div>
        </>
    )
}

export default WebPageMain
