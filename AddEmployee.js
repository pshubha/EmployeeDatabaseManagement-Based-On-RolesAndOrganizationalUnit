//Add new employee
import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { v1 as uuid } from 'uuid'


function AddEmployee() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [orgnz, setOrgn] = useState('')
    let userList = JSON.parse(localStorage.getItem('EmployeeList')) || [];;


    let roles = JSON.parse(localStorage.getItem('RolesList')) || []
    let newRole = roles.map((f, i) => f.Name)

    let orgn = JSON.parse(localStorage.getItem('OrganizationList')) || []
    let newOrgn = orgn.map((o, i) => o.Orgn);
    console.log(newRole);
    console.log(newOrgn);

    const handleAddEmp = (e) => {
        e.preventDefault();
        let obj = { id: uuid(), Name: name, Email: email, Role: role, Orgn: orgnz }
        userList.push(obj)
        localStorage.setItem('EmployeeList', JSON.stringify(userList));
        orgn.filter((o, i) => {
            if (o.Orgn == orgnz) {
                o.size = o.size + 1
            }
        })

        console.log(orgn)
        localStorage.setItem('OrganizationList', JSON.stringify(orgn));
        setName('');
        setEmail('');
        setRole('');
        setOrgn('');

    }

    return (
        <div className='container' style={{ backgroundColor: '#e2e2e2', width: '50%', marginTop: '100px' }}>
            <form onSubmit={handleAddEmp}>
                <div style={{ padding: '20px' }}>
                    <Link to='/employee' style={{ float: 'right' }} className='btn btn-transporant'>&times;</Link>
                    <h3>New Employee</h3>
                </div>
                <div>
                    <label className='form-label'>Name:</label>
                    <input type='text' className='form-control' placeholder='Name..' value={name} onChange={(e) => setName(e.target.value)} required />
                    <label className='form-label'>Email:</label>
                    <input type='email' className='form-control' placeholder='Email..' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className='form-lable'>Roles</label>
                    <select className='form-control' value={role} onChange={(e) => setRole(e.target.value)}>
                        <option default>Select Role</option>
                        {
                            newRole.map((r, i) =>
                                <option key={i + 1} value={r}>{r}</option>)
                        }
                    </select>
                    <label className='form-lable'>Organization</label>
                    <select className='form-control' value={orgnz} onChange={(e) => setOrgn(e.target.value)} >
                        <option default>Select Organization</option>
                        {
                            newOrgn.map((o, i) =>
                                <option key={i + 1} value={o}>{o}</option>)
                        }
                    </select>
                    <hr></hr>
                    <div style={{ padding: '20px' }}>
                        <button type='submit' style={{ marginRight: '10px' }} className='btn btn-info'>Add</button>
                        <Link to='/employee' className='btn btn-secondary'>Close</Link>
                    </div>

                </div>

            </form>
        </div>
    )
}

export default AddEmployee
