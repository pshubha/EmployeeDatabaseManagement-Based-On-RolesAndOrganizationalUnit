//Add new Role

import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { v1 as uuid } from 'uuid'



function AddRoles() {
    const [roleName, setRoleName] = useState('');
    const [roleDesc, setRoleDesc] = useState('');

    const handleAddRole = (e) => {
        e.preventDefault();
        console.log(roleName, roleDesc);
        let roles = JSON.parse(localStorage.getItem('RolesList'));
        if(roles == null){
            roles =[]
        }
        let obj = {id:uuid(), Name: roleName, Desc: roleDesc}
        roles.push(obj);
        localStorage.setItem('RolesList', JSON.stringify(roles));
        setRoleDesc('');
        setRoleName('');
    }

    return (
        <div className='container' style={{ backgroundColor: '#e2e2e2', width: '50%', marginTop: '100px' }}>
            <form onSubmit={handleAddRole}>
                <div style={{ padding: '20px' }}>
                    <Link to='/roles' style={{ float: 'right' }} className='btn btn-transporant'>&times;</Link>
                    <h3>New Role</h3>
                </div>
                <hr></hr>
                <div>
                    <label className='form-label'>Name:</label>
                    <input type='text' className='form-control' placeholder='Name..' value={roleName} onChange={(e) => setRoleName(e.target.value)} required />
                    <label className='form-label'>Description:</label>
                    <textarea type='text' className='form-control' placeholder='Write description...' value={roleDesc} onChange={(e) => setRoleDesc(e.target.value)} />
                </div>
                <hr></hr>
                <div style={{ padding: '20px' }}>
                    <button type='submit' style={{ marginRight: '10px' }} className='btn btn-info'>Add</button>
                    <Link to='/roles' className='btn btn-secondary'>Close</Link>
                </div>
            </form>
        </div>
    )
}

export default AddRoles
